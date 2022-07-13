import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }
}

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const addItemToCart = (cartItems, cartItem) => {
  const newCartItems = addCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, cartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (isCartOpen) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
}