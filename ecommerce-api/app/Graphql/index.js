const merge = require("lodash/merge");
const { makeExecutableSchema } = require("graphql-tools");

const userResolvers = require("./users/resolvers");
const userTypeDefs = require("./users/typeDefs");

const productResolvers = require("./products/resolvers");
const productTypeDefs = require("./products/typeDefs");

const typeDefs = [userTypeDefs, productTypeDefs];

const resolvers = merge(userResolvers, productResolvers);

module.exports = makeExecutableSchema({ typeDefs, resolvers });
