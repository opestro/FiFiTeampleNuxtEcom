FROM node:20.9.0

WORKDIR /app

COPY package*.json ./
COPY . .
RUN NODE_ENV=production npm install 
RUN npm build
ENV HOST 0.0.0.0
EXPOSE 3000


CMD [ "npm", "run", "start" ]