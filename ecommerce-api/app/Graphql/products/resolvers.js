"use strict";

const Product = use("App/Models/Product");
const { checkAuth, checkAdminAuth } = require("../../Utils/CheckAuth");

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all products
    async allProducts(_, {}, { auth }) {
      await checkAuth(auth);
      const products = await Product.all();
      return products.toJSON();
    },
    // Get a product by its ID
    async fetchProduct(_, { id }, { auth }) {
      await checkAuth(auth);
      const product = await Product.find(id);
      return product.toJSON();
    }
  },
  Mutation: {
    // Add a new product
    async addProduct(_, { title, price, description }, { auth }) {
      await checkAdminAuth(auth);
      return await Product.create({
        title,
        price,
        description
      });
    }
  }
};

module.exports = resolvers;
