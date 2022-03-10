import { Component, Input, OnInit } from "@angular/core";
import { Content } from "../../interfaces/content";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  //@Input() content: Content[] = [];
  public contentData: Content[] = [];
  public contentTable: Content[] = [
    {
      id: 1,
      name: "Data 1",
      value: "Value 1",
    },
    {
      id: 2,
      name: "Data 2",
      value: "Value 2",
    },
    {
      id: 3,
      name: "Data 3",
      value: "Value 3",
    },
    {
      id: 4,
      name: "Data 4",
      value: "Value 4",
    },
    {
      id: 1,
      name: "Data 1",
      value: "Value 1",
    },
    {
      id: 2,
      name: "Data 2",
      value: "Value 2",
    },
    {
      id: 3,
      name: "Data 3",
      value: "Value 3",
    },
    {
      id: 4,
      name: "Data 4",
      value: "Value 4",
    },
    {
      id: 1,
      name: "Data 1",
      value: "Value 1",
    },
    {
      id: 2,
      name: "Data 2",
      value: "Value 2",
    },
    {
      id: 3,
      name: "Data 3",
      value: "Value 3",
    },
    {
      id: 4,
      name: "Data 4",
      value: "Value 4",
    },
    {
      id: 1,
      name: "Data 1",
      value: "Value 1",
    },
    {
      id: 2,
      name: "Data 2",
      value: "Value 2",
    },
    {
      id: 3,
      name: "Data 3",
      value: "Value 3",
    },
    {
      id: 4,
      name: "Data 4",
      value: "Value 4",
    },
  ];

  page = 1;
  pageSize = 5;
  collectionSize = this.contentTable.length;

  constructor() {
    this.refreshContentData();
  }
  ngOnInit(): void {}
  refreshContentData() {
    this.contentData = this.contentTable
      .map((country, i) => ({
        // id: i + 1,
        ...country,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
