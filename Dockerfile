FROM node:16.13.1-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN apk update && apk upgrade && \
    apk add --no-cache bash
    
RUN npm install --production

COPY moleculer.config.js ./
COPY services ./

CMD ["npm", "start"]