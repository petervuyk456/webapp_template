FROM node:lts-slim

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .


RUN yarn install --production=false

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]