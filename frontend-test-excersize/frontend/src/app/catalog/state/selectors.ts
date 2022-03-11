import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatalogState } from "./catalog.reducer";

const selectCatalog = createFeatureSelector<CatalogState>("CATALOG");
const selectElement = createFeatureSelector<CatalogState>("ELEMENT");

export const selectData = createSelector(
  selectCatalog,
  (state) => state.content
);
export const selectCurrentPage = createSelector(
  selectCatalog,
  (state) => state.page
);
export const selectTotalPages = createSelector(
  selectCatalog,
  (state) => state.totalPages
);
export const selectCurrentElement = createSelector(
  selectElement,
  (state) => state
);
