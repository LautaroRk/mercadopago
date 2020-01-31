FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -G yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
