import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  selectCurrentPage,
  selectData,
  selectTotalPages,
} from "./state/selectors";
import { fetchPage } from "./state/catalog.actions";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit {
  content$ = this.store.select(selectData);
  page$ = this.store.select(selectCurrentPage);
  pagesCount$ = this.store.select(selectTotalPages);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchPage({ page: 0 }));
  }

  fetchPage(event: { page: number }) {
    this.store.dispatch(fetchPage(event));
  }
}
