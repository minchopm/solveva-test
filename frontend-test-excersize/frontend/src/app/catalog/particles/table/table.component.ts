import { Component, Input, OnInit } from "@angular/core";
import { Content } from "../../interfaces/content";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() content: Content[] = [];

  constructor() {}

  ngOnInit(): void {}
}
