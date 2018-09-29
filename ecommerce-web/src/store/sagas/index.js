import { all } from "redux-saga/effects";

import userSaga from "./UserSaga";
import productSaga from "./ProductSaga";

function* rootSaga() {
  yield all([productSaga, userSaga]);
}

export default rootSaga;
