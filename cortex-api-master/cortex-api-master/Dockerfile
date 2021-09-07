# Build stage #1
FROM node:12-alpine

WORKDIR /srv

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# Build stage #2
FROM node:12-alpine

WORKDIR /usr/app

COPY --from=0 /srv/dist ./dist
COPY --from=0 /srv/node_modules ./node_modules

EXPOSE 3300
CMD ["node", "dist/index.js"]