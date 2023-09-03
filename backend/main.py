from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from langchain.embeddings import LlamaCppEmbeddings
from langchain.llms import LlamaCpp
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA

from models import SourceModel, ResponseModel, QuestionModel

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

persist_directory = "db"
model_path = "llm_bin/yarn-llama-2-7b-64k.Q2_K.gguf"
llama_embeddings = LlamaCppEmbeddings(model_path=model_path)

vectordb = Chroma(
    embedding_function=llama_embeddings,
    persist_directory=persist_directory,
)


retriever = vectordb.as_retriever(search_kwargs={"k": 5})

llm = LlamaCpp(
    model_path=model_path,
    temperature=0.75,
    max_tokens=2000,
    top_p=0.95,
    verbose=True,
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True,
)


@app.post("/get_response/")
async def get_response(question: QuestionModel):
    llm_response = qa_chain(question.question)
    text_answer = llm_response["result"]

    sources = [
        SourceModel(
            text=source.page_content,
            title=source.metadata["Citation Title"],
            doi=source.metadata["DOI"],
        )
        for source in llm_response["source_documents"]
    ]

    response_data = ResponseModel(answer=text_answer, sources=sources)
    print(llm_response)
    return JSONResponse(content=response_data.dict())
