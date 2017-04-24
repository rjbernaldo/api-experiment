FROM node:7.9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g yarn
COPY yarn.lock /usr/src/app
RUN yarn install

COPY . /usr/src/app

EXPOSE 8080
CMD ['yarn', 'start']
