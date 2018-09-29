export const REQUEST_PRODUCT_LIST = "REQUEST_PRODUCT_LIST";
export const ADD_PRODUCT = "ADD_PRODUCT";

export function requestProductList() {
  return {
    type: REQUEST_PRODUCT_LIST
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}
