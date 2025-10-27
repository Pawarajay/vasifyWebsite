FROM node:22-alpine

RUN npm install -g pnpm@latest

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app

RUN pnpm install

COPY . /app

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
