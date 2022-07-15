import { combineReducers } from "redux";
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { productReducer } from './product/product.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  product: productReducer
});