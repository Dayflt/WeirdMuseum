# 기존의 우리가 app.py로 사용하던 파일을 실행시키는 파일
# 우리가 만드는 flask앱을 모듈화 시킨이후에 실행시키기 위해 
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object("web.config.Config")
db=SQLAlchemy(app)

# app.config['SECRET_KEY']='thisisfirstflaskapp'



from web import routes


