FROM node:18.13.0
WORKDIR /src
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]
