FROM node:alpine AS builder
WORKDIR /srv/app
COPY package.json package.json
COPY index.js index.js
COPY options.js options.js
COPY bin bin
COPY eslintrc.json eslintrc.json
RUN npm pack && mv *.tgz standard.tgz

FROM node:alpine
COPY --from=builder /srv/app/standard.tgz /
RUN npm i -g standard.tgz && rm standard.tgz
CMD [ "standard" ]