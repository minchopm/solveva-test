import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fetchElement, fetchElementFailed, fetchElementSucceeded,
  fetchPage,
  fetchPageFailed,
  fetchPageSucceeded,
} from "./catalog.actions";
import { catchError, concatMap, map } from "rxjs/operators";
import { ContentProvider } from "../providers/content.provider";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CatalogEffects {
  public fetchPage$ = createEffect(() =>
    this.actions.pipe(
      ofType(fetchPage),
      concatMap(({ page }) => this.provider.getData(page)),
      map((data) => fetchPageSucceeded(data)),
      catchError((error: Error) => of(fetchPageFailed({ error })))
    )
  );

  public fetchElement$ = createEffect(() =>
    this.actions.pipe(
      ofType(fetchElement),
      concatMap((param)=>this.provider.getElement(param.id)),
      map((data) => fetchElementSucceeded(data)),
      catchError((error: Error) => of(fetchElementFailed({ error })))
    )
);

  constructor(private actions: Actions, private provider: ContentProvider) {}
}
