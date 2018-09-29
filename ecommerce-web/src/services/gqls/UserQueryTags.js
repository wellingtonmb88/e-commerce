import { gql } from "apollo-boost";

const UserFragments = gql`
  fragment UserParts on User {
    __typename
    id
    username
    email
    token
    role
  }
`;

export const ALL_USER = gql`
  query AllUsers {
    allUsers {
      ...UserParts
    }
  }
  ${UserFragments}
`;

export const GET_USER = gql`
  query FetchUser($id: Int!) {
    fetchUser(id: $id) {
      ...UserParts
    }
  }
  ${UserFragments}
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      id
      username
      email
      token
      role
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      __typename
      id
      username
      email
      token
      role
    }
  }
`;
