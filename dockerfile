
FROM node:10
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm install --registry=https://r.npm.taobao.org && npm run build

FROM nginx
RUN mkdir /app /usr/local/nginx /usr/local/nginx/logs
COPY --from=0 /app/dist/ /app
COPY --from=0 /app/configs/nginx/server.conf /etc/nginx/nginx.conf