import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen, setIsCheckoutDone } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean,
  readonly isCheckoutDone: boolean,
  readonly cartItems: CartItem[]
}

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  isCheckoutDone: false,
  cartItems: []
}

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload
    }
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload
    }
  }
  if (setIsCheckoutDone.match(action)) {
    return {
      ...state,
      isCheckoutDone: action.payload
    }
  }
  return state;
}