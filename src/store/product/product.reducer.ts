import { AnyAction } from "redux";
import { CategoryItem } from "../categories/categories.types";
import { setCurrentProductSuccess, setCurrentProductFailed, setCurrentProductStart } from "./product.action";

export type ProductState = {
  readonly currentProduct: CategoryItem | null,
  readonly error: Error | null,
  readonly isLoading: boolean
}

const INITIAL_STATE: ProductState = {
  currentProduct: null,
  error: null,
  isLoading: false
}

export const productReducer = (
  state = INITIAL_STATE,
  action: AnyAction
) => {
  if (setCurrentProductStart.match(action)) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (setCurrentProductSuccess.match(action)) {
    return {
      ...state,
      currentProduct: action.payload,
      isLoading: false
    }
  }
  if (setCurrentProductFailed.match(action)) {
    return {
      ...state,
      error: action.payload
    }
  }
  return state;
}