# docker-node
docker node

## Dockerfile node v16.13.2

````
FROM node:16.13.2-buster-slim
LABEL maintainer="Wachira Duangdee wachira90@yahoo.com"
WORKDIR /usr/src/app/
RUN npm install -g npm@latest
COPY package.json /usr/src/app/
RUN npm install
COPY app.js /usr/src/app/
CMD ["node", "app.js"]
````

## Dockerfile node v14.15.1

````
FROM node:14.15.1-buster-slim
LABEL maintainer="Wachira Duangdee wachira90@yahoo.com"
WORKDIR /usr/src/app/
# RUN npm install -g npm@latest
COPY package.json /usr/src/app/
RUN npm install
COPY app.js /usr/src/app/
CMD ["node", "app.js"]
````


## build command

````
docker build -t wachira90/node:14.15.1 .

docker rmi wachira90/node:14.15.1

docker run --name node14 -p 8014:8000 -d wachira90/node:14.15.1

docker exec -it node14 bash

docker  stop node14

docker  start node14

docker logs -f node14
````
