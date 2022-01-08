FROM node:17-alpine
LABEL name="devopspractice"

ENV BASE_DIR /opt/aashirwad/devopspractice

WORKDIR ${BASE_DIR}

RUN echo ${BASEDIR}

RUN apk update && apk add bash

COPY dist/ dist/
COPY config/ dist/config/

COPY package.json .
COPY package-lock.json .

COPY ecosystem.config.js .
COPY start.sh .


RUN echo "$PWD"
RUN apk add --no-cache git


# # Install all packages
RUN npm ci --only=prod
RUN npm install -g pm2
RUN chmod +x start.sh 


ENTRYPOINT [ "./start.sh" ]
