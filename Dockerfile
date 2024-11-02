FROM node:22-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

EXPOSE 4000

COPY package*.json .

COPY vite.config.js .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "preview"]