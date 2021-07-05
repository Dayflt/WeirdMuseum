FROM ubuntu:20.04

WORKDIR /app

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev  \
    build-essential libssl-dev libffi-dev python3-setuptools


ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . . 
EXPOSE 5000

CMD [ "python3","app.py" ]

