import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesMemo = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategories = createSelector(
  [selectCategoriesMemo],
  (categories) => categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
)