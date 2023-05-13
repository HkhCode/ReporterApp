from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
# ============================== MODELS ============================== #
class Params(BaseModel):
    def __init__(self , fieldId:int ,title:str,value:str,number:int,group:str):
        self.fieldId=fieldId
        self.title=title
        self.value=value
        self.number=number
        self.group=group

class FormModel(BaseModel):
    def __init__(self ,params:Params,coordinate:str,ip:str,browser:str,urlReferrer:str,custName:str,custCode:int,editDate:str,editorName:str,editorId:int,createDate:str,creatorName:str,creatorId:int, id:int , formId:int , formattedId:int):
        self.id =id
        self.formId = formId
        self.formattedId = formattedId
        self.creatorId = creatorId
        self.creatorName = creatorName
        self.createDate = createDate
        self.editorId = editorId
        self.editorName=editorName
        self.editDate = editDate
        self.custCode = custCode
        self.custName=custName
        self.urlReferrer=urlReferrer
        self.browser=browser
        self.ip=ip
        self.coordinate=coordinate
        self.params=params

# ============================== DATA ============================== #
class Database():
    def __init__(self , dbname:str):
        self._connection = sqlite3.connect(dbname)
        self._cursor = self._connection.cursor()



class formCRUD(Database):
    def __init__(self, dbname: str):
        super().__init__(dbname)
    def addFormResult(self, formResult:FormModel):
        pass
    def editFormResult(self , formResult:FormModel):
        pass
    def deleteFormResult(self , id:int):
        pass
    def getAllForms(self):
        pass
    def getPerosnForms(self):
        pass
    def getSpecificDatesForms(self):
        pass
# ============================== GLOBAL VARIABLES ============================== #
formcrud = formCRUD("ReporterDataBase.db")
app = FastAPI()
BASEURL = "/api/"
origins = ["*"]
# ============================== ALLOWING CORS ============================== #
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================== API METHODS ============================== #
@app.post("/addForm/")
def addFormData(form :int ):
    return "1"