import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import products from "./reducers/ProductReducers";
import user from "./reducers/UserReducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    products,
    user
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
