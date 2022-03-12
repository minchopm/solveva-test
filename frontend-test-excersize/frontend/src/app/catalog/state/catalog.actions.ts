import { createAction, props } from "@ngrx/store";
import { Content } from "../interfaces/content";

export const fetchPage = createAction(
  "[Data] Fetch page",
  props<{ page: number }>()
);
export const fetchPageSucceeded = createAction(
  "[Data] Fetch page succeeded",
  props<{ content: Content[]; page: number; totalPages: number }>()
);
export const fetchPageFailed = createAction(
  "[Data] Fetch page failed",
  props<{ error: Error }>()
);
export const fetchElement = createAction(
  "[Data] Fetch element",
  props<{ id: number }>()
);
export const fetchElementSucceeded = createAction(
  "[Data] Fetch element succeeded",
  props<{ content: Content[]; page: number; totalPages: number }>()
);
export const fetchElementFailed = createAction(
  "[Data] Fetch element failed",
  props<{ error: Error }>()
);
