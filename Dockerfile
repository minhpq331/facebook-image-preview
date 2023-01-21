FROM node:18-alpine

LABEL AUTHOR=minhpq331@gmail.com
EXPOSE 3000

WORKDIR /app

ADD . /app
RUN yarn --pure-lockfile
CMD ["node", "index.js"]
