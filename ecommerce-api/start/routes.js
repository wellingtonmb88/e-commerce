"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use("Route");

const GraphqlAdonis = use("ApolloServer");
const schema = require("../app/Graphql");

Route.route(
  "/graphql",
  ({ request, auth, response }) => {
    return GraphqlAdonis.graphql(
      {
        schema,
        context: { auth },
        formatError: error => ({
          message: error.message,
          path: error.path
        })
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);

Route.get("/graphiql", ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: "/graphql" }, request, response);
});
