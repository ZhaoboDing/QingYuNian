FROM node:10
MAINTAINER BananaWolf <me@dingzhaobo.net>
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]
