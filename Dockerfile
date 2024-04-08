FROM node:20.9.0

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000

# Set NuxtJS system variables so the application can be reached on your network
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "start" ]