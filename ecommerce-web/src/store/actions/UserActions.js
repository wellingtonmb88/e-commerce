export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const REQUEST_LOGGED_USER = "REQUEST_LOGGED_USER";
export const ADD_USER = "ADD_USER";

export function login(email, password) {
  return {
    type: REQUEST_LOGIN,
    email,
    password
  };
}

export function logout() {
  return {
    type: REQUEST_LOGOUT
  };
}

export function getLoggedUser() {
  return {
    type: REQUEST_LOGGED_USER
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}
