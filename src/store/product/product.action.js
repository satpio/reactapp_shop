import { PRODUCT_ACTION_TYPES } from './product.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentProductStart = (product) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_START, product);

export const setCurrentProductSuccess = (product) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_SUCCESS, product);

export const setCurrentProductFailed = (error) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_FAILED, error);