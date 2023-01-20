FROM node:18-alpine AS builder

LABEL AUTHOR=minhpq331@gmail.com
EXPOSE 3000

WORKDIR /app

RUN yarn global add node-gyp 

ADD . /app
RUN yarn --pure-lockfile
CMD ["node", "index.js"]
