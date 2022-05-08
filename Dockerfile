# syntax=docker/dockerfile:1
FROM node:17.1.0
WORKDIR /src
COPY . .
RUN yarn install --production
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 4000