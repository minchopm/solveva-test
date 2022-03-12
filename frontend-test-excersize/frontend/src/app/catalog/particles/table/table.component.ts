import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Content } from "../../interfaces/content";
import { fetchElement, fetchPage } from "../../state/catalog.actions";
import { selectData, selectTotalPages } from "../../state/selectors";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  public contentTable: Content[] = []
  public data$ = this.store.select(selectData);
  page = 0;
  pageSize$: Observable<number> = this.store.select(selectTotalPages);

  constructor(private store: Store, public router: Router) {}

  ngOnInit(): void {}

  fetchPage(event: { page: number }) {
    this.page = event.page;
    this.store.dispatch(fetchPage(event));
  }
  redirect(id:number){
    this.router.navigateByUrl(`/details/${id}`);
  }
}
