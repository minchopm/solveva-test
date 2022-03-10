import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableComponent } from "./table.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("TableComponent", () => {
  let spectator: Spectator<TableComponent>;
  const createComponent = createComponentFactory(TableComponent);

  beforeEach(() => (spectator = createComponent()));

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
