FROM node:alpine

WORKDIR /app
COPY package.json /app/
COPY src /app/src

RUN npm install
EXPOSE 9000 
CMD [ "npm", "run", "prod"]
