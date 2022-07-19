import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesMemo = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategories = createSelector(
  [selectCategoriesMemo],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
)