FROM node:lts-alpine
WORKDIR /usr/src/app/client
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 8080
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
