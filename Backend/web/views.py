from web.models import video_table

from operator import mod, pos

from flask_sqlalchemy import model
from web import db
from sqlalchemy import desc,sql

DISPLAY_VIDEO=4

#사용자로부터 영상을 받았을 때 db 저장, model id리턴
def video_insert(model_result, image_no):
    "model_id return + insert video url to db"
    video_temp=video_table(model_result,image_no)
    db.session.add(video_temp)
    db.session.commit()
    model_idR=db.session.query(video_table.model_id).filter(video_table.model_result==model_result).first()
    return model_idR.model_id

#model_id받았을 때 result결과 주소 반환
def get_video_url(model_id):
    "gets model_result from model_id"
    a= db.session.query(video_table).filter(video_table.model_id==model_id).first()
    return a.model_result

#model_id받았을 때 해당 db삭제
def remove_vid(model_id):
    "removes video from model_id"
    remove=db.session.query(video_table).filter(video_table.model_id==model_id).first()
    db.session.delete(remove)
    db.session.commit()

#사용자가 gallery에 disply 원할 경우 닉네임(model_name), category_no입력받아 해당 model_id db에 저장
def gallery_info(model_id,model_name,category_no):
    "uploads information for uploading video on gallery"
    post=db.session.query(video_table).filter(video_table.model_id==model_id).first()
    post.model_name=model_name
    post.category_no=category_no
    post.model_date=sql.func.now()#str(dt.datetime.now())
    db.session.commit()

#category_no에 해당하는 영상 list형태로 반환
def post_gallery_category(category_no):
    "returns info about 4(or less) videos based on category_no"
    video=db.session.query(video_table).filter(video_table.category_no==category_no).order_by(video_table.model_date.desc())
    return video.all()

#result url값을 받아오면 해당 값 db에서 삭제
def gallery_remove_oldvid(model_result):
    "removes the old video of such model_result"
    remove=db.session.query(video_table).filter(video_table.model_result==model_result).first()
    db.session.delete(remove)
    db.session.commit()

#해당 카테고리에 DISPLAY_VIDEO 이상의 영상이 저장되면 가장 오래된 영상 db에서 삭제
def post_gallery(category_no):
    "based on the category_no remove video except for the recent 4 videos"
    result=[]
    for instance in db.session.query(video_table).filter(video_table.category_no==category_no).order_by(video_table.model_date.desc()):
        result.append(instance.model_result)
    if len(result)>DISPLAY_VIDEO:
        for i in result[DISPLAY_VIDEO:]:
            gallery_remove_oldvid(i)
