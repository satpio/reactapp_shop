import { PRODUCT_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
  currentProduct: null
}

export const productReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: payload
      }
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
}