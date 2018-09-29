# Use Node latest as the base image.
FROM node:latest

RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose our server port.
EXPOSE 3333 80

# Run our app.
CMD ["node", "server.js"]
