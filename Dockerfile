FROM node:18.13.0
WORKDIR /src
COPY . .
RUN npm ci 
ENV PORT=8000
EXPOSE 8000
CMD [ "npm", "run", "start" ]
