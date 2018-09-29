module.exports = `
  type User {
    id: Int
    username: String
    email: String
    password: String!
    role: String
    token: String
  }

  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
  }

  type Mutation {
    login (email: String!, password: String!): User
    createUser (username: String!, email: String!, password: String!, role: String!): User
  }
`;
