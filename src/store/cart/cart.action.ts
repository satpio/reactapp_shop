import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { createAction, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';

export const addCartItem = (
  cartItems: CartItem[],
  cartItemToAdd: CategoryItem,
  cartItemToAddQuantity: number
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAddQuantity }
        : cartItem
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAddQuantity }];
  }
}

export const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }
}

export const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export type setCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;
export type setIsCheckoutDone = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CHECKOUT_DONE, boolean>;
export type setIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const addItemToCart = (
  cartItems: CartItem[],
  cartItem: CategoryItem,
  cartItemToAddQuantity: number
) => {
  const newCartItems = addCartItem(cartItems, cartItem, cartItemToAddQuantity);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItem: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
}

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItem: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
}

export const setCartItems = withMatcher(
  (newCartItems: CartItem[]): setCartItems => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }
);

export const setIsCheckoutDone = withMatcher(
  (isCheckoutDone: boolean): setIsCheckoutDone => {
    return createAction(CART_ACTION_TYPES.SET_IS_CHECKOUT_DONE, isCheckoutDone);
  }
);

export const setIsCartOpen = withMatcher(
  (isCartOpen: boolean): setIsCartOpen => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
  }
);