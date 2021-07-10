from web.views import post_gallery
from flask import json, render_template, request, jsonify
import os
from web import views
# __init__.py 파일에서 정의한 app을 불러옴
from web import app
from werkzeug.utils import secure_filename
from web.predictmix import generate

from web.models import video_table

@app.route('/')
def test():
    return 'flask start'

@app.route('/upload')
def load_file():
   return render_template('upload.html')
	
@app.route('/api/model', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
      img_name=request.form['img_name']
      print(img_name)
      f = request.files['file']
      f.save(secure_filename(f.filename))      
      return mixvideo(img_name,f.filename)
      #return {
       #  'file uploaded successfully':img_name,
        # 'file name': file_name}

# AI모델 결과물 생성
def mixvideo(img_name,file_name):
    #data = request.json
    # 사용자의 캡쳐 영상의 저장소의 url 주소 -> imageio.getreader()을 이용해서 영상을 읽어줌
    #cap_vid = request.form['src'].split(':')[-1]
    # byte 형태로 생성함 -> google cloud에 upload -> 반환된 url주소를 이용 -> 다음 페이지에서 영상을 송출
    # 캡쳐된 영상은 코드 디렉토리에 저장
    
    mixedvid = generate('web/AI/mraa.yaml', 'web/AI/mraa.tar', 'web/AI/img/%s.png' %(str(img_name)), '%s' %(file_name))
    os.remove(os.path.join(os.curdir, file_name))
    views.video_insert(mixedvid,img_name)

    if not mixedvid:
        return '', 404

    return jsonify({
        'success' :  True,
        'file' : 'Received',
        'model_result' : mixedvid})


@app.route('/api/model/<model_id>', methods = ['GET', 'DELETE', 'POST'])
def return_result(model_id):
    if request.method == 'GET':
        result_url = views.get_video_url(model_id)
        if result_url:
            return jsonify({'success' : True, 'model_result' : result_url})
        else:
            return jsonify({'success' : False, 'model_result' :  None})

    elif request.method == 'DELETE':
        views.remove_vid(model_id)
        return jsonify({'success' : True})
    else:
        f = request.get_json()
        user_name, category_id = f['user_name'], f['category_id']
        views.gallery_info(model_id, user_name, category_id)
        return jsonify({"success" : True})
        
        
@app.route('/api/model/gallery/<category_no>', methods = ['GET'])
def getby_emoji(category_no):
    datas = views.post_gallery_category(category_no) #list형태로 반환
    result = []
    num = len(datas)
    if num < 4:
        for n in range(num):
            video = datas[n]
            result.append(video.serialize())
    else:
        post_gallery(category_no)
        for n in range(4):
            video = datas[n]
            result.append(video.serialize())
    return json.dumps(result)