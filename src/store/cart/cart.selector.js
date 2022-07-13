import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

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
  (cartItems) => cartItems.reduce((totalValue, currentValue) => {
    return totalValue + currentValue.quantity;
  }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((totalValue, currentValue) => {
    return totalValue + (currentValue.quantity * currentValue.price);
  }, 0)
);