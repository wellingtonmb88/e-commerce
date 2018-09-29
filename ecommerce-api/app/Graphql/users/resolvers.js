"use strict";

const User = use("App/Models/User");
const { checkAdminAuth } = require("../../Utils/CheckAuth");

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async allUsers(_, {}, { auth }) {
      await checkAdminAuth(auth);
      const users = await User.all();
      return users.toJSON();
    },
    // Get a user by its ID
    async fetchUser(_, { id }) {
      await checkAdminAuth(auth);
      const user = await User.find(id);
      return user.toJSON();
    }
  },
  Mutation: {
    // Handles user login
    async login(_, { email, password }, { auth }) {
      const { token } = await auth.attempt(email, password);
      const user = await User.query()
        .where("email", email)
        .first();
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        token
      };
    },

    // Create new user
    async createUser(_, { username, email, password, role }, { auth }) {
      await checkAdminAuth(auth);
      return await User.create({ username, email, password, role });
    }
  }
};

module.exports = resolvers;
