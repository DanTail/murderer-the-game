FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start

EXPOSE 5000
