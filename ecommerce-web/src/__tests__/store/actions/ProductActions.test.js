import configureMockStore from "redux-mock-store";
import * as ProductActions from "store/actions/ProductActions";

const mockStore = configureMockStore();

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

describe("ProductActions suite test", () => {
  it("testing REQUEST_PRODUCT_LIST action", () => {
    const expectedActions = [{ type: ProductActions.REQUEST_PRODUCT_LIST }];
    const store = mockStore(INITIAL_STATE);
    store.dispatch(ProductActions.requestProductList());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
