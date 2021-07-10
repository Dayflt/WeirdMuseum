from sqlalchemy.sql.expression import func
from web import db
from sqlalchemy import sql


class video_table(db.Model):
    __tablename__ = 'video_info'

    model_id = db.Column(db.Integer,primary_key=True)#모델번호
    model_result=db.Column(db.String(100)) #모델 결과물
    image_no=db.Column(db.Integer) #이미지번호
    model_name=db.Column(db.String(20)) #닉네임
    category_no=db.Column(db.Integer) #이모티콘 번호
    model_date=db.Column(db.DateTime(timezone=True))#등록날짜

    def __init__(self, model_result, image_no):
        self.model_result=model_result
        self.image_no=image_no
        self.model_name=None
        self.category_no=None
        self.model_date = None
    
    def serialize(self):
        return {
            'model_id' : self.model_id,
            'model_result': self.model_result,
            'image_no': self.image_no,
            'model_name': self.model_name,
            'category_no': self.category_no,
            'model_date':self.model_date
        }
    
    def __repr__(self):
        return f"<video_table('{self.model_result}','{self.image_no}', '{self.model_name}')>"
     