FROM python:3.11-slim
ENV PYTHONUNBUFFERED True

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

RUN apt-get update -y
RUN apt install python3-dev -y
RUN apt install wget -y
RUN apt-get install build-essential -y

RUN pip install --no-cache-dir --upgrade -r requirements.txt

RUN wget -q https://huggingface.co/TheBloke/Yarn-Llama-2-7B-64K-GGUF/resolve/main/yarn-llama-2-7b-64k.Q2_K.gguf
RUN mkdir -p llm_bin
RUN mv yarn-llama-2-7b-64k.Q2_K.gguf llm_bin/

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]