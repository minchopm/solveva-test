import { createReducer, on } from "@ngrx/store";
import { Content } from "../interfaces/content";
import { fetchPageSucceeded } from "./catalog.actions";

export interface CatalogState {
  content: Content[];
  page: number;
  totalPages: number;
}

const initialState: CatalogState = { content: [], page: 0, totalPages: 0 };

export const catalogReducer = createReducer<CatalogState>(
  initialState,
  on(fetchPageSucceeded, (state, action) => ({
    content: action.content,
    page: action.page,
    totalPages: action.totalPages,
  }))
);
