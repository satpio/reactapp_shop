import { PRODUCT_ACTION_TYPES } from './product.types';
import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { setCurrentProductSuccess, setCurrentProductFailed } from './product.action';
import { setCurrentProductStart } from './product.action';

export function* setCurrentProduct({ payload }: setCurrentProductStart) {
  try {
    yield* put(setCurrentProductSuccess(payload));
  } catch (error) {
    yield* put(setCurrentProductFailed(error as Error));
  }
}

export function* onSetCurrentProduct() {
  yield* takeLatest(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_START, setCurrentProduct);
}

export function* productSagas() {
  yield* all([call(onSetCurrentProduct)]);
}