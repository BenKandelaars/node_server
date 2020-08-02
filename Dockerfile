
FROM node:14

WORKDIR /app
COPY package*.json /app/
RUN npm install

ENV PORT=3020
CMD [ "sh", "-c", "npm run dev -- src/simple_server.js" ]
