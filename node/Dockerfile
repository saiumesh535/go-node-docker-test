FROM node

RUN apt update

WORKDIR /app

COPY node .

RUN npm install

EXPOSE 3001

CMD [ "npm" , "start" ]
