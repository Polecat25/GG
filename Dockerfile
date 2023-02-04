FROM node:lts-alpine3.17
WORKDIR /src
COPY . .
RUN npm ci 
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "run", "start" ]
