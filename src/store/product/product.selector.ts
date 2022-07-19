import { createSelector } from "reselect";
import { ProductState } from "./product.reducer";
import { RootState } from "../store";

export const selectProductReducer = (state: RootState): ProductState => state.product;

export const selectCurrentProduct = createSelector(
  selectProductReducer,
  (product) => product.currentProduct
);