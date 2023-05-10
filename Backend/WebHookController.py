from fastapi import FastAPI
import sqlite3

app = FastAPI()
class formParams : 
    fieldId : int
    title:str
    value : str
    number:int
    group : str
class formData :
    id :int
    formId : int
    formattedId : int
    creatorId : int
    creatorName : int
    createDate : str
    editorId : int
    editorName : int
    editDate : str
    custCode : int
    custName : str
    urlReferrer : str
    browser : str
    ip : str
    coordinate : str
    params : list
class dbConnection:
    def __init__(self , dbname):
        self._connection = sqlite3.connect(dbname)
        self._cursor = self._connection.cursor()
    def addData(self, data:formData): 
        for i in data.params:
            self._cursor.execute(f"INSERT INTO params VALUES ({i.fieldId} , {i.title} , {i.value} , {i.number})")
        self._cursor.execute(f"INSERT INTO formsData VALUES ({data.id} , {data.formId} , {data.formattedId} , {data.creatorId} , {data.creatorName} , {data.createDate} , {data.editorId} , {data.editorName} , {data.editDate} , {data.custCode} , {data.custName} , {data.urlReferrer} , {data.browser} , {data.ip} , {1})")
    def deleteData(self , data):
        pass
    def getAllData(self):
        pass
    def getSpecialPersonsData(self, person):
        pass
    def getSpecialDateData(self ,startDate , endDate):
        pass
database = dbConnection('ReporterDataBase')
class inputWebHookData :
    formData : formData

@app.post("/formafzar/")
def addFormData(form):
    database.addData(form)