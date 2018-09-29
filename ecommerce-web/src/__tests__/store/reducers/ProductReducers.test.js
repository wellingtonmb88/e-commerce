import * as ProductActions from "store/actions/ProductActions";
import * as ProductReducers from "store/reducers/ProductReducers";
import products from "store/reducers/ProductReducers";

const mockProducts = [
  {
    id: 1,
    title: "Ferrari 1984",
    price: 3000.99,
    description: "Ferari 1984, Red, 1000hp "
  }
];

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

const loading = { ...INITIAL_STATE, loading: true };

const success = { data: mockProducts, loading: false, error: false };

const failed = {
  data: [],
  loading: false,
  error: true,
  errorMessage: "Error fetch Products List"
};

describe("ProductReducers reducer", () => {
  it("should return the initial state", () => {
    expect(products(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it("should handle REQUEST_PRODUCT_LIST", () => {
    expect(
      products(INITIAL_STATE, {
        type: ProductActions.REQUEST_PRODUCT_LIST
      })
    ).toEqual(loading);
  });

  it("should handle SUCCESS_PRODUCT_LIST", () => {
    expect(
      products(INITIAL_STATE, {
        type: ProductReducers.SUCCESS_PRODUCT_LIST,
        payload: { data: mockProducts }
      })
    ).toEqual(success);
  });

  it("should handle SUCCESS_PRODUCT_LIST", () => {
    expect(
      products(INITIAL_STATE, {
        type: ProductReducers.FAILURE_PRODUCT_LIST,
        payload: { data: [] }
      })
    ).toEqual(failed);
  });
});
