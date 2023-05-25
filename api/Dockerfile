FROM node:16.20.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]
