import {
  SUCCESS_PRODUCT_LIST,
  FAILURE_PRODUCT_LIST,
  SUCCESS_ADD_PRODUCT,
  FAILURE_ADD_PRODUCT
} from "../reducers/ProductReducers";
import { REQUEST_PRODUCT_LIST, ADD_PRODUCT } from "../actions/ProductActions";
import { getProductList, addProduct } from "../../services/ProductApi";

import { takeLatest, put, call, all } from "redux-saga/effects";

export function* requestProductList() {
  try {
    const response = yield call(getProductList);
    yield put({ type: SUCCESS_PRODUCT_LIST, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_PRODUCT_LIST });
  }
}

export function* createProduct(action) {
  try {
    const response = yield addProduct(action.product);
    yield put({ type: SUCCESS_ADD_PRODUCT, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_ADD_PRODUCT });
  }
}

export default all([
  takeLatest(REQUEST_PRODUCT_LIST, requestProductList),
  takeLatest(ADD_PRODUCT, createProduct)
]);
