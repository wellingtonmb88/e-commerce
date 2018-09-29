import { put, call } from "redux-saga/effects";
import * as ProductSaga from "store/sagas/ProductSaga";

describe("ProductSaga flow", () => {
  it("generator SUCCESS_PRODUCT_LIST", () => {
    const gen = ProductSaga.requestProductList();
    gen.next();
    expect(gen.next().value).toEqual(
      put({ type: "SUCCESS_PRODUCT_LIST", payload: { data: undefined } })
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
