FROM node:latest
USER root

#작업 디렉토리 설정
WORKDIR /app
#Dockerfile과 같은 위치에 있는 package.json을 /app에 복사
COPY package.json .

RUN npm install --save --legacy-peer-deps
#현재 디렉토리의 모든걸 /app에 저장
COPY . .

# ENV REACT_APP_NAME=myName

#Dev
# EXPOSE 3000
# CMD ["npm","start"]

#Prod
RUN ["npm", "run", "build"]
# CMD ["npm", "run", "build"]
