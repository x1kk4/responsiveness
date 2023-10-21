FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install 

COPY . .

RUN npm run build

FROM nginx:alpine3.17-slim

COPY --from=build /app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]