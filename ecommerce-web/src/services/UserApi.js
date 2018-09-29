import {
  apolloQueryService,
  apolloMutateService
} from "./apollo/ApolloService";
import { GET_USER, LOGIN_USER, CREATE_USER } from "./gqls/UserQueryTags";

const USER_TOKEN = "USER_TOKEN";
const LOGGED_USER = "LOGGED_USER";

const getUser = async ({ id }) => {
  const { fetchUser: user } = await apolloQueryService(GET_USER, {
    id
  });
  return user;
};

const login = async ({ email, password }) => {
  const { login: user } = await apolloMutateService(LOGIN_USER, {
    email,
    password
  });
  await setLoggedUser(user);
  return user;
};

const addUser = async user => {
  const { username, email, password, role } = user;
  const { createUser: addedUser } = await apolloMutateService(CREATE_USER, {
    username,
    email,
    password,
    role
  });
  return addedUser;
};

const setLoggedUser = async user => {
  await localStorage.setItem(USER_TOKEN, user.token);
  await localStorage.setItem(LOGGED_USER, JSON.stringify(user));
};

const getLoggedUser = async () => {
  const user = await localStorage.getItem(LOGGED_USER);
  return user ? JSON.parse(user) : null;
};

const cleanLoggedUser = async () => {
  await localStorage.clear();
};

export {
  getUser,
  login,
  addUser,
  setLoggedUser,
  getLoggedUser,
  cleanLoggedUser
};
