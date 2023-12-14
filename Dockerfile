FROM node:18.10.0-alpine3.15 as base
WORKDIR /app
COPY .yarn ./.yarn
COPY package.json yarn.lock .yarnrc.yml ./

FROM base as build
RUN export NODE_ENV=production
RUN yarn install
COPY . .
RUN yarn run prisma:generate
RUN yarn build

FROM base as prod
COPY --from=build  /app/node_modules /app/node_modules
COPY --from=build  /app/.next /app/.next
COPY --from=build  /app/public /app/public
COPY --from=build  /app/prisma /app/prisma

EXPOSE 80
CMD ["yarn", "start"]