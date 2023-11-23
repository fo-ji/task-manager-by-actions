FROM node:20.9.0-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .