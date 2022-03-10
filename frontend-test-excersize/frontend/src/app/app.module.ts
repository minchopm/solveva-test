import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from "./details/details.component";
import { RouterModule } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { EffectsModule } from "@ngrx/effects";
import { CatalogModule } from "./catalog/catalog.module";
import { DetailsModule } from "./details/details.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "catalog", component: CatalogComponent },
      { path: "details/:id", component: DetailsComponent },
      { path: "**", redirectTo: "/catalog" },
    ]),

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    CatalogModule,
    DetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
