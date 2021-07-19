from sqlalchemy.sql.elements import Null
from web.views import post_gallery
from flask import json, render_template, request, jsonify, abort
from web import views
# __init__.py 파일에서 정의한 app을 불러옴
from web import app
from werkzeug.utils import secure_filename
from web.predictmix import *
from sqlalchemy.exc import *
from sqlalchemy.orm.exc import *

@app.errorhandler(500)
def error500(error):
    return jsonify({
        'success':False,
        'message': error.description,
        'status':500
    })

@app.route('/')
def hello():
    return "Run Flask"

@app.route('/upload')
def load_file():
   return render_template('upload.html')


@app.route('/api/model', methods = ['POST'])
def upload_file():
    if request.method == 'POST':
        try:
            img_name=request.form['image_no']
            f = request.files['file']
            f.save(secure_filename(f.filename))
            return mixvideo(img_name, f.filename)
        except:
            abort(500,"Something wrong")

# AI모델 결과물 생성
def mixvideo(img_name,file_name):
    #data = request.json
    # 사용자의 캡쳐 영상의 저장소의 url 주소 -> imageio.getreader()을 이용해서 영상을 읽어줌
    #cap_vid = request.form['src'].split(':')[-1]
    # byte 형태로 생성함 -> google cloud에 upload -> 반환된 url주소를 이용 -> 다음 페이지에서 영상을 송출
    # 캡쳐된 영상은 코드 디렉토리에 저장
    
    mixedvid = generate('web/AI/mraa.yaml', 'web/AI/mraa.tar', 'web/AI/img/%s.png' %(str(img_name)), '%s' %(file_name))
    del_vid(file_name, True)
    print('deleted cap')
    views.video_insert(mixedvid,img_name)
    print('deleted mix')

    if not mixedvid:
        return jsonify({
            'success' :  False,
            'model_id' : Null
        })
    return jsonify({
        'success':True,
        'model_id':views.get_model_id(mixedvid)
    })

@app.route('/api/model/<model_id>', methods = ['GET', 'DELETE', 'PATCH'])
def return_result(model_id):
    if request.method == 'GET':
        try:
            result_url = views.get_video_url(model_id)
            return jsonify({'success' : True, 'model_result' : result_url})
        except:
            abort(500,"No model_id in Database")

    elif request.method == 'DELETE':
        try:
            views.remove_vid(model_id)
            return jsonify({'success' : True})
        except:
            abort(500,"No model_id in Database")

    elif request.method=='PATCH':
        try:
            if (request.get_json()==None):
                abort(500,"No request")
            f = request.get_json()
            try:
                user_name, category_id = f['model_name'], f['category_no']
            except:
                return abort(500,"Wrong request(there is no model_name or category_no)")
            views.gallery_info(model_id, user_name, category_id)
            return jsonify({"success" : True})
        except:
            abort(500,"No model_id in database")


@app.route('/api/model/gallery/<category_no>', methods = ['GET'])
def getby_emoji(category_no):
    if not 0<int(category_no)<5:
        abort(500,"category_no is wrong")
    try:
        datas = views.post_gallery_category(category_no) #list형태로 반환
        result = []
        num = len(datas)
        if num == 0:
            return jsonify({
                'success' : True,
                'message':'No values in request category_no',
                'data': result
            })
        if num < 4:
            for n in range(num):
                video = datas[n]
                result.append(video.serialize())
        else:
            post_gallery(category_no)
            for n in range(4):
                video = datas[n]
                result.append(video.serialize())
        return jsonify({
            'success':True,
            'data': result
        })
    except:
        abort(500, "Something wrong in database")