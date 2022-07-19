import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
  SET_CART_COUNT = 'cart/SET_CART_COUNT',
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SET_IS_CHECKOUT_DONE = 'cart/SET_IS_CHECKOUT_DONE'
}

export type CartItem = CategoryItem & {
  quantity: number;
}