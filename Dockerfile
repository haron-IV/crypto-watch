# syntax=docker/dockerfile:1
FROM node:17-alpine
WORKDIR /src
COPY . .
RUN mv .env-prod .env
RUN yarn install --production
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 4000