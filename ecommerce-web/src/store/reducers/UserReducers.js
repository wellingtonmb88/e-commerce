import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  ADD_USER,
  REQUEST_LOGGED_USER
} from "../actions/UserActions";

export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";
export const SUCCESS_ADD_USER = "SUCCESS_ADD_USER";
export const FAILURE_ADD_USER = "FAILURE_ADD_USER";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const FAILURE_LOGOUT = "FAILURE_LOGOUT";
export const SUCCESS_LOGGED_USER = "SUCCESS_LOGGED_USER";
export const FAILURE_LOGGED_USER = "FAILURE_LOGGED_USER";

const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  error: false,
  errorMessage: null
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, loading: true };
    case SUCCESS_LOGIN:
      return {
        user: action.payload.data,
        token: action.payload.data.token,
        loading: false,
        error: false
      };
    case FAILURE_LOGIN:
      return {
        user: null,
        token: null,
        loading: false,
        error: true,
        errorMessage: "Error LOGIN"
      };
    case REQUEST_LOGOUT:
      return { ...state, loading: true };
    case SUCCESS_LOGOUT:
      return {
        user: null,
        token: null,
        loading: false,
        error: false
      };
    case FAILURE_LOGOUT:
      return {
        user: null,
        token: null,
        loading: false,
        error: true,
        errorMessage: "Error LOGOUT"
      };
    case REQUEST_LOGGED_USER:
      return { ...state, loading: true };
    case SUCCESS_LOGGED_USER:
      return {
        user: action.payload.data,
        token: action.payload.data.token,
        loading: false,
        error: false
      };
    case FAILURE_LOGGED_USER:
      return {
        user: null,
        token: null,
        loading: false,
        error: true,
        errorMessage: "Error LOGGED_USER"
      };
    case ADD_USER:
      return { ...state, loading: true };
    case SUCCESS_ADD_USER:
      return {
        user: state.user,
        token: state.token,
        loading: false,
        error: false
      };
    case FAILURE_ADD_USER:
      return {
        user: state.user,
        token: state.token,
        loading: false,
        error: true,
        errorMessage: "Error add USER"
      };
    default:
      return state;
  }
}
