import { PRODUCT_ACTION_TYPES } from './product.types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setCurrentProductSuccess, setCurrentProductFailed } from './product.action';

export function* setCurrentProduct({ payload }) {
  try {
    yield put(setCurrentProductSuccess(payload));
  } catch (error) {
    yield put(setCurrentProductFailed(error));
  }
}

export function* onSetCurrentProduct() {
  yield takeLatest(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_START, setCurrentProduct);
}

export function* productSagas() {
  yield all([call(onSetCurrentProduct)]);
}