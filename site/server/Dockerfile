FROM node:lts-slim

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . .

EXPOSE 5000

# You can change this
CMD [ "yarn", "start" ]