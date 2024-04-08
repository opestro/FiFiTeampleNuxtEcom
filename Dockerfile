FROM node:20.9.0

WORKDIR /app

COPY package*.json ./
COPY . .
COPY .env ./

RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000


CMD [ "npm", "run", "start" ]