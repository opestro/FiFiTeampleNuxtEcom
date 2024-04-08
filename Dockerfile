FROM node:20.9.0

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
ENTRYPOINT ["node", ".output/server/index.mjs"]