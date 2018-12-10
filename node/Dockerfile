FROM node

RUN apt update

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm" , "start" ]
