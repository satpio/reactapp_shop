import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

export const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartIsCheckoutDone = createSelector(
  [selectCartReducer],
  (cart) => cart.isCheckoutDone
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((totalValue, currentValue) => {
      return totalValue + currentValue.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((totalValue, currentValue) => {
      return totalValue + (currentValue.quantity * currentValue.price);
    }, 0)
);