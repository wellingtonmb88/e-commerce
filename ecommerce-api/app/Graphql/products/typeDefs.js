module.exports = `
  type Product {
    id: Int!
    title: String!
    price: Float!
    description: String!
  }

  extend type Query {
    allProducts: [Product]
    fetchProduct(id: Int!): Product
  }

  extend type Mutation {
    addProduct(title: String!, price: Float!, description: String!): Product
  }
`;
