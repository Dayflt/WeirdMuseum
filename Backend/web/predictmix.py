from web.AI.demo import make_animation, load_checkpoints
import imageio
from skimage.transform import resize
from skimage import img_as_ubyte
from web.gcp import upload_vid

from web.views import *
import os, math, random

def remake_vidname(vid_name):
    vid_name=vid_name+str(math.ceil(random.random()*100000))
    return vid_name

def del_vid(vid_name, cap = True):
    "if cap = True : cap vid, if cap = False : mixed vid"
    if cap:
        os.remove(os.path.join(os.getcwd(), vid_name))
    else:
        vid_name = vid_name.split('.')[0]
        os.remove(os.path.join(os.getcwd(), 'web/data/result/%s.mp4'%vid_name))

def generate(config_path, cp_path , source_img, driving_video):
    "mixes video with AI and saves mixed vid in local and bucket"
    vid_name = driving_video.split('.')[0]
    # imageio.get_reader(URI)를 이를 이용해서 이미지를 이진 데이터로 읽는 것이 충분히 가능
    # 지금 해야 하는 것은 blob으로 받아온 영상을, 즉 영상을 이미지단위로 나누어서 blob으로 받아오는 것이기 때문에 
    # config_path, cp_path는 절대경로로 바꾸어주기
    # source_img, driving_video는 imageio때문에 상대 경로로 넣어주기
    config_path, cp_path, source_img, driving_video = os.path.abspath(config_path), os.path.abspath(cp_path), source_img, driving_video
    
    source_img = resize(imageio.imread(source_img), (256, 256))
    # 이부분 수정해야함
    # 캡쳐 영상을 blob의 형태로 받아온 이후에 이를 mp4의 형태로 바꾸어 준다

    reader = imageio.get_reader(driving_video)
    fps = reader.get_meta_data()['fps']
    driving_video = []
    for im in reader:
        driving_video.append(im)
    reader.close()

    driving_video = [resize(frame, (256, 256)) for frame in driving_video]

    # load model
    model_gen, model_kp = load_checkpoints(config_path, cp_path, cpu = True)
    
    # numpy array 형태로 영상 반환
    vid = make_animation(source_img, driving_video, 
        generator = model_gen, kp_detector = model_kp, relative = True, adapt_movement_scale = True, cpu = True)
    vid = [img_as_ubyte(frame) for frame in vid]
    # numpy array -> mp4

    vid_name=remake_vidname(vid_name)
    imageio.mimsave(os.path.join(os.getcwd(),'web/data/result/%smixed.mp4'%vid_name), vid, fps=fps)

    # 동영상의 url 반환
    return(upload_vid('%smixed.mp4'%vid_name))
