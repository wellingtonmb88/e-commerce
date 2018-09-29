import { REQUEST_PRODUCT_LIST, ADD_PRODUCT } from "../actions/ProductActions";

export const SUCCESS_PRODUCT_LIST = "SUCCESS_PRODUCT_LIST";
export const FAILURE_PRODUCT_LIST = "FAILURE_PRODUCT_LIST";
export const SUCCESS_ADD_PRODUCT = "SUCCESS_ADD_PRODUCT";
export const FAILURE_ADD_PRODUCT = "FAILURE_ADD_PRODUCT";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: null
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PRODUCT_LIST:
      return { ...state, loading: true };
    case SUCCESS_PRODUCT_LIST:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case FAILURE_PRODUCT_LIST:
      return {
        ...state,
        data: state.data,
        loading: false,
        error: true,
        errorMessage: "Error fetch Products List"
      };
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case SUCCESS_ADD_PRODUCT:
      const newState = Object.assign({}, state);
      newState.data.push(action.payload.data);
      return {
        ...state,
        data: [...newState.data],
        loading: false,
        error: false
      };
    case FAILURE_ADD_PRODUCT:
      return {
        ...state,
        data: state.data,
        loading: false,
        error: true,
        errorMessage: "Error add Product"
      };
    default:
      return state;
  }
}
