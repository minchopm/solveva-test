import { createReducer, on } from "@ngrx/store";
import { Content } from "../interfaces/content";
import { fetchElement, fetchPageSucceeded } from "./catalog.actions";

export interface CatalogState {
  content: Content[];
  page: number;
  totalPages: number;
}

export interface ElementState {
  id: number;
  name: string;
  value: string;
  variant: number
}

const initialState: CatalogState = { content: [], page: 0, totalPages: 0 };

export const catalogReducer = createReducer<CatalogState>(
  initialState,
  on(fetchPageSucceeded, (state, action) => ({
    ...state,
    content: action.content,
    page: action.page,
    totalPages: action.totalPages,
  }))
);


const initialElementState: ElementState = { id: 0, name: '', value: '', variant: 0};

export const elementReducer = createReducer<ElementState>(
  initialElementState,
  on(fetchElement, (state, action) =>  {
    return{
    ...state,
    id: action.id
  }})
);
