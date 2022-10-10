FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY ./ ./
ENTRYPOINT yarn run start:dev