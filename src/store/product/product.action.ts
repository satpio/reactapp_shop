import { PRODUCT_ACTION_TYPES } from './product.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';

export type setCurrentProductStart = ActionWithPayload<PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_START, CategoryItem>;
export type setCurrentProductSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_SUCCESS, CategoryItem>;
export type setCurrentProductFailed = ActionWithPayload<PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_FAILED, Error>;

export const setCurrentProductStart = withMatcher(
  (product: CategoryItem): setCurrentProductStart => {
    return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_START, product);
  }
);

export const setCurrentProductSuccess = withMatcher(
  (product: CategoryItem): setCurrentProductSuccess => {
    return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_SUCCESS, product);
  }
);

export const setCurrentProductFailed = withMatcher(
  (error: Error): setCurrentProductFailed => {
    return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_FAILED, error);
  }
);