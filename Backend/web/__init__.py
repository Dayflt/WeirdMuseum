# 기존의 우리가 app.py로 사용하던 파일을 실행시키는 파일
# 우리가 만드는 flask앱을 모듈화 시킨이후에 실행시키기 위해 
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY']='thisisfirstflaskapp'
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:1111@localhost/video'
app.config['FLASK_APP'] = '__init__.py'
db=SQLAlchemy(app)

from web import routes


