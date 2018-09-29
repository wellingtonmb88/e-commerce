import {
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_ADD_USER,
  FAILURE_ADD_USER,
  SUCCESS_LOGOUT,
  FAILURE_LOGOUT,
  SUCCESS_LOGGED_USER,
  FAILURE_LOGGED_USER
} from "../reducers/UserReducers";
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  ADD_USER,
  REQUEST_LOGGED_USER
} from "../actions/UserActions";
import {
  login,
  addUser,
  cleanLoggedUser,
  getLoggedUser
} from "../../services/UserApi";
import { takeLatest, put, all } from "redux-saga/effects";

export function* requestLogin(action) {
  try {
    const response = yield login({
      email: action.email,
      password: action.password
    });
    yield put({ type: SUCCESS_LOGIN, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_LOGIN });
  }
}

export function* createUser(action) {
  try {
    const response = yield addUser(action.user);
    yield put({ type: SUCCESS_ADD_USER, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_ADD_USER });
  }
}

export function* logout() {
  try {
    yield cleanLoggedUser();
    yield put({ type: SUCCESS_LOGOUT });
  } catch (err) {
    yield put({ type: FAILURE_LOGOUT });
  }
}

export function* loggedUser() {
  try {
    const response = yield getLoggedUser();
    if (response) {
      yield put({ type: SUCCESS_LOGGED_USER, payload: { data: response } });
    } else {
      yield put({ type: FAILURE_LOGGED_USER });
    }
  } catch (err) {
    yield put({ type: FAILURE_LOGGED_USER });
  }
}

export default all([
  takeLatest(REQUEST_LOGIN, requestLogin),
  takeLatest(REQUEST_LOGOUT, logout),
  takeLatest(ADD_USER, createUser),
  takeLatest(REQUEST_LOGGED_USER, loggedUser)
]);
