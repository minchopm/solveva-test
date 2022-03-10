import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginatorComponent } from "./paginator.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("PaginatorComponent", () => {
  let spectator: Spectator<PaginatorComponent>;
  const createComponent = createComponentFactory({
    component: PaginatorComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
