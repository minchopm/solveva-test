import { Component, Input, OnInit } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Content } from "../../interfaces/content";
import { ContentProvider } from "../../providers/content.provider";
import { fetchPage } from "../../state/catalog.actions";
import { selectData, selectTotalPages } from "../../state/selectors";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  // public contentData: Content[] = [];
  public contentTable: Content[] = [];
  public data$ = this.store.select(selectData);
  public collectionSize$ = this.store.select(selectTotalPages);
  page = 0;
  pageSize = 9;

  constructor(public contentProvider: ContentProvider, private store: Store) {}

  ngOnInit(): void {}

  fetchPage(event: { page: number }) {
    this.page = event.page;
    event.page = event.page + 1;
    console.log("event", event);
    this.store.dispatch(fetchPage(event));
  }
  // refreshContentData(event: { page: number }) {
  //   this.contentData = this.contentTable
  //     .map((country, i) => ({
  //       ...country,
  //     }))
  //     .slice(
  //       (this.page - 1) * this.pageSize,
  //       (this.page - 1) * this.pageSize + this.pageSize
  //     );
  // }
}
