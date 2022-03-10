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
  "[Data] Fetch page succeeded",
  props<{ error: Error }>()
);
