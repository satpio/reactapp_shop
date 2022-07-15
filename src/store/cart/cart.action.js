import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const findExistingCartItem = (cartItems, cartItemId) => {
  return cartItems.find(
    (cartItem) => cartItem.id === cartItemId
  );
}

export const addCartItem = (cartItems, cartItemToAdd, cartItemToAddQuantity) => {
  const existingCartItem = findExistingCartItem(cartItems, cartItemToAdd.id);
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

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = findExistingCartItem(cartItems, cartItemToRemove.id);
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

export const addItemToCart = (cartItems, cartItem, cartItemToAddQuantity) => {
  const newCartItems = addCartItem(cartItems, cartItem, cartItemToAddQuantity);
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