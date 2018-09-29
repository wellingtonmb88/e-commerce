import { gql } from "apollo-boost";

const ProductFragments = gql`
  fragment ProductParts on Product {
    __typename
    id
    title
    price
    description
  }
`;

export const ALL_PRODUCTS = gql`
  query AllProducts {
    allProducts {
      ...ProductParts
    }
  }
  ${ProductFragments}
`;

export const GET_PRODUCT = gql`
  query FetchProduct($id: Int!) {
    fetchProduct(id: $id) {
      ...ProductParts
    }
  }
  ${ProductFragments}
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($title: String!, $price: Float!, $description: String!) {
    addProduct(title: $title, price: $price, description: $description) {
      __typename
      id
      title
      price
      description
    }
  }
`;
