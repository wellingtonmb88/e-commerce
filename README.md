## Project overview

For this project, I built a web application to simulate an e-commerce.

## TL;DR

To get started:
- Server-API
  - Verify if Docker is running before to continue:
  - First install all project dependencies:
      - cd ecommerce-api
      - npm install
  - Run the Server locally:
      - docker-compose up
      - npm run migration
      - npm run seed

- WebSite
  - First install all project dependencies:
      - cd ecommerce-web
      - npm install
  - Run the WebSite (* You need to start the Server first):
      - npm start or  yearn start
  - Run the Tests:
      - npm run test
  - Run the Test Coverage:
      - npm run test-coverage

## Login into Web
Admin user:
  - email: wellingtonmb88@gmail.com
  - password: password
Normal user:
  - email: barbosa@gmail.com
  - password: password

## Project Web Status:
- [X] Login
- [X] Logout
- [X] User Session
- [X] Create User
- [X] Create Product
- [X] List Products
- [X] Loading indicator

## Technologies:
  - Docker
  - Postegresql
  - Adonijs (https://adonisjs.com/)
  - React
  - Redux
  - Redux-Saga
  - GraphQl [Apollo-Server] (https://www.apollographql.com/docs/apollo-server/)
  - GraphQl [Apollo-Client] (https://www.apollographql.com/docs/react/)
  - Material-UI (https://material-ui-next.com/)