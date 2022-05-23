FROM node:18-alpine as base

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .

USER node

RUN npm install -g npm@latest && npm install

COPY --chown=node:node . .

EXPOSE 8000

FROM base as dev
CMD [ "npm", "run", "dev" ]

FROM base as prod
RUN npm run build
CMD [ "node", "./build/src/index.js" ]