# 👻 Weird Museum 👻 - Dayfly 

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

<b>Weird Museum</b> is a responsive web where you can bring images to life. There is a couple of famous paintings you can choose and you can create realistic face swaps based on the target painting by just taking a short video clip.

<!-- ✨ [See our website!](https://weirdmuseum.ml) ✨ -->

## 🔍 User Interface 
#### Main ➡️ Select ➡️ Record ➡️ Preview ➡️ Result ➡️ Gallery

<p>
  <img src="https://user-images.githubusercontent.com/72537563/127084314-5bda5930-3d18-45f6-8440-583053334e1a.gif" width="600" height="333"/>  
  <img src="https://user-images.githubusercontent.com/72537563/126996758-0eec7189-5241-4c83-8d3f-cf811806d040.gif"height="333"/>
</p> 



## 💡 Tech Stack
```
- Frontend : React
- API Server : Flask
- Deep learning : Pytorch, Colab
- Middleware : Gunicorn
- Web Server : Nginx
- Deployment: Docker, NHN Cloud, GCP(Cloud SQL, GCS bucket)
- Database: PostgreSQL
- API Test : Postman
- API Documentation : Swagger
- Version Control : Git, Github, GitKraken
```
➡️ [Why do we choose these tech stacks for this project?](https://quartz-hip-22c.notion.site/e6bc1ea381be426888651bbfe5a572f6) 

|         Frontend         |      Backend      |         etc          |
| :----------------------: | :---------------: | :------------------: |
| ![react](https://img.shields.io/badge/react-v17.0.2-9cf?logo=react) ![Nodejs](https://img.shields.io/badge/Nodejs-v14.16.0-blue?logo=node.js)   ![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript) ![Bootstrap](https://img.shields.io/badge/bootstrap-v1.4.3-9cf?logo=bootstrap) ![axios](https://img.shields.io/badge/axios-v0.21.1-9cf?color=purple)  | ![Flask](https://img.shields.io/badge/flask-v2.0.1-green?logo=flask)  ![Python](https://img.shields.io/badge/python-v3.8.10-skyblue?logo=python) ![Gunicorn](https://img.shields.io/badge/gunicorn-v20.1.0-darkgreen?logo=gunicorn) ![postgreSQL](https://img.shields.io/badge/postgreSQL-v12.0-blue?logo=postgresql) ![Pytorch](https://camo.githubusercontent.com/5182d780a87ed9c5b2003da7788da5229e02f0713feaf4605682eb890f897d59/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7079746f7263682d626c75653f6c6f676f3d7079746f726368) ![Colab](https://camo.githubusercontent.com/262664d89515ac916d0e1a7e5b90f047caac9c16515aa2139df56bd67523ca6c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6c61622d6461726b677265656e3f6c6f676f3d476f6f676c65436f6c6162)  | ![Docker](https://img.shields.io/badge/docker-v20.10.7-brightgreen?logo=docker)  ![Nginx](https://img.shields.io/badge/Nginx-v1.21.1-brightgreen?logo=nginx)   ![github](https://img.shields.io/badge/github-gray?logo=github)![VScode](https://img.shields.io/badge/VScode-v1.58.1-blue?logo=visual-studio-code) ![Google Cloud Platform](https://img.shields.io/badge/Google_Cloud_Platform-VM_instance-red?logo=gcp) ![GitKraken](https://img.shields.io/badge/GitKraken-gray?logo=GitKraken) ![Swagger](https://img.shields.io/badge/Swagger-gray?logo=Swagger) ![Postman](https://img.shields.io/badge/Postman-gray?logo=Postman) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![NHNcloud](https://camo.githubusercontent.com/f1b8b16600d3210298fa1971ec94ed1f41cb80146f76f4c9754a075b972970e6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e484e5f436c6f75645f5562756e74752d32302e30342d626c75653f6c6f676f3d7562756e7475)|  

## 💻 System Architecture
![Architecture_Final](https://user-images.githubusercontent.com/72537563/127142745-0e079bfa-bf2a-4a07-8fbe-3c112307df57.png)
<!-- ![시스템아키텍쳐](https://user-images.githubusercontent.com/72537563/125903428-906468b5-f4e8-498b-91e3-e348cc90e1e5.png) -->

## ✅ Main POC
- Create a face swap video
- Save result video and share it at gallery page categorized by hashtag 

## 👀 Used Model
- [First Order Motion Model for Image Animation](https://github.com/AliaksandrSiarohin/first-order-model)  
![used_model](https://user-images.githubusercontent.com/72537563/126891907-06fbf0bd-d5a7-46b4-a934-0e32d9581493.gif)

## 📗 SWAGGER
-[See API document](https://app.swaggerhub.com/apis/harloxx/WeirdMuseum/1-oas3)
![swagger](https://user-images.githubusercontent.com/72537563/126892065-b92c3f84-adc5-4fd4-86a5-64d118f63b49.png)


## ✏️ Getting Started (Prerequisities & Installing & Running)

### 1. Cloning
```
$ git clone https://github.com/Dayflt/Silicon-Valley-Internship-Dayfly.git
```

### 2. Frontend: React ⚛️
  - Install packages
  ```
  $ cd Frontend
  $ npm i
  ```
### 3.  Backend: Flask 🌶
  - Download <b> vox-cpk.pth.tar</b> [here](https://drive.google.com/drive/folders/1PyQJmkdCsAkOYwUyaj_l-l0as-iLDgeH) and add it inside Docker\Backend\web\AI\ directory after changing its name with <b>mraa.tar </b>
  
### 4.  Docker 🐳
  #### ✔ Development environment 
  ```
  $ docker-compose up --build  # build images and run containers
  $ docker-compose down #stop running containers
  $ docker-compose up # rerun containers
  or 
  $ docker-compose down -v # stop running containers and delete its volume
  ```
  - See database
   ```
  $ docker-compose exec postgres_db psql --username=postgres --dbname=video
  (psql)
  video=# \l                            #list all databases
  video=# \dt                           #list all tables in the current database
  video=# select * from video_info;     #list all data of video_info table
   ```
  - Running 
  ```
  http://localhost:5000              # Flask application
  http://localhost:5000/swagger      # Swagger
  http://localhost:3000              # React application
  ```
  
  #### ✔ Production environment
  
  1. Check whether 80 and 443 ports are open 
  
  2. Modify configuration
  - Change <b>domains</b> and <b>email addresses</b> in init-letsencrypt.sh
  - Replace all occurrences of <b>weirdmuseum.ml</b> with your domain (ex: server_name museum.ml -> server_name 'your domain')
  
  3. Run the init script to obtain SSL Certificates and Credentials (./certbot directory will be created)
  ```
  $ chmod +x ./init-letsencrypt.sh  # Make it executable
  $ ./init-letsencrypt.sh            # Run the init script
  ```
  
  4. Check the status of your service
  ```
  $ docker ps                       # See running containers
  ```
 
 5. Once you obtain SSL Certificates and Credentials, use the commands below to run, stop or rerun the containers.
 ```
  $ docker-compose -f docker-compose.prod.yml up --build
  $ docker-compose down #stop running containers
  $ docker- compose -f docker-compose.prod.yml up # rerun containers
  or
  $ docker-compose down # stop running containers and delete its volume
  ```
   
  - Running (based on our domain)
  ```
  https://museum.ml             # Nginx 
  ```
  
  #### etc
  ```
  $ docker ps #See running containers
  $ docker ps -a #See all containers
  $ docker-compose logs [service_name]  #Check the service logs
  $ docker images # See all built images
  $ docker-compose rm -f $(docker ps -a -q) #remove all containers
  $ docker volume ls # See volumes
  $ docker images prune # remove untagged(none) images
  $ docker network prune # remove all unused network
  $ docker volume prune  # remove all unused local volume
  ```
  




## 🔧 Directory Structure
```bash
├── README.md                                          - 리드미 파일
│
├── Backend/                - 백엔드 플라스크 디렉토리
│   ├── test_endpoints.py   - unit test 실행 파일
│   ├── run.py              - Flask 실행 위한 파일
│   ├── views.py            - SQLAlchamy의 기능을 정의한 파일
│   ├── .flaskenv           - Flask 실행을 위한 환경변수 설정 파일
│   ├── dayfly-318913-a4b443321e00.json  - Google Cloud Bucket에 접근하기 위한 권한 정보가 담긴 파일        
│   ├── requirements.txt    - 모듈들을 정리한 파일
│   └── web/
│        ├── AI/                  - AI모델 알고리즘
│        ├── data/result/         - 백엔드 동영상 임시 저장 디렉토리
│        ├── __init__.py          - 실행시키려는 flask app이 정의되어있는 파일 프로젝트를 실행시키면 app을 구동시킴
│        ├── config.py            - 필수 configuration 사항들이 정의된 파일
│        ├── gcp.py               - google cloud bucket을 이용해 파일 입출력 스트림을 다루기 위한 함수가 정의된 파일
│        ├── models.py            - video_table이라는 database class가 정의된 파일
│        ├── prdedictmix.py       - AI 모델을 적용해서 서비스의 핵심인 섞인 영상 생성을 하기 위한 파일
│        ├── routes.py            - API 명세서가 모두 정의된 파일
│        ├── views.py           -database ORM 정의 파일
│              └── static/
│              └── swagger.json     -swagger 정의 파일
│
├── Frontend/
│   ├── Dockerfile                                    - 프론트앤드 도커파일
│   ├── public/
│   │    ├──index.html                                - React 프로젝트 표시(favicon, title설정)
│   │    └── logo.ico                                 - 웹페이지 favicon
│   ├── package.json & package.lock.json              - 라이브러리 관리 파일
│   └── src/ 
│        ├── index.js & index.css                     - React 프로젝트 파일
│        ├── App.js & App.css                         - page component 관리 파일
│        ├── App.test.js & setupTest.js
│        ├── reportWebVitals.js
│        ├── api.jsx                                   - baseURL 설정
│        └── page/
│   	        ├── css /                              - 컴포넌트들의 css
│   	        ├── imgs /                             - 컴포넌트들의 image
│   	        ├── Gallery.js                         - 갤러리 페이지
│   	        ├── Home.js                            - 메인 페이지
│   	        ├── Preview.js                         - Preview 페이지
│   	        ├── Record.js                          - 웹캠 페이지
│   	        ├── Result.js                          - 결과물 페이지
│   	        ├── Selection.js                       - 사진 선택 페이지
│   	        └── components/                        
│                   └── Modal.js                      - 결과물의 정보 입력 팝업창
│
├── Nginx/
│   ├── Dockerfile                                    - nginx 도커파일
│   └── nginx.conf                                    - nginx 설정파일
│
├── Settings/                                         -  환경변수 설정 파일
│   ├── dev/                                              
│   │    └── .env.dev                                 -  개발환경변수 설정 파일
│   └── prod/
│        └── .env.prod                                -  배포환경변수 설정 파일
├── docker-compose.yml                                - 개발용 docker-compose파일
├── docker-compose.prod.yml                           - 배포용 docker-compose파일
├── init-letsencrypt.sh                               - SSL인증서 발급받기 위한 과정을 자동화시킨 스크립트파일 
└── .gitignore		
```  

## 🔍 Other repos
- [Backend repository](https://github.com/Dayflt/Backend.git)  
- [Frontend repository](https://github.com/Dayflt/Frontend.git)

## 👨‍👧‍👦 Contributors (2021/6/28 ~ 2021/07/30)
| 김서연 | 방근영 | 이지혜 | 장현우 | 김하은 |
| :----: | :----: | :----: |:----: | :----: |
| [@ksy991018](https://github.com/ksy991018) | [@banggu0321](https://github.com/banggu0321) | [@penguin1109](https://github.com/penguin1109) |[@aswooo](https://github.com/aswooo) |[@harloxx](https://github.com/harloxx) |
|Project Manager,DevOps| Front-end Developer| AI, Back-end Developer |Front-end Developer |AI, Backend-Developer |

