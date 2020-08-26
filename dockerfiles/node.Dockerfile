
FROM node:14

WORKDIR /app
COPY package*.json /app/
RUN npm install

ENTRYPOINT [ "./node_modules/.bin/nodemon" ]
CMD [ "--help" ]