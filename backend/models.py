from typing import List
from pydantic import BaseModel


class QuestionModel(BaseModel):
    question: str


class SourceModel(BaseModel):
    text: str
    title: str
    doi: str


class ResponseModel(BaseModel):
    answer: str
    sources: List[SourceModel]
