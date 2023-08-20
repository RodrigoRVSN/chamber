FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .

RUN yarn build

# Intermediate step to rebuild the node_modules with just production dependencies
FROM builder AS intermediate

RUN yarn install --production --frozen-lockfile

# Use a separate stage for the runner
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=intermediate /app/ .

EXPOSE 3000

CMD ["yarn", "start"]
