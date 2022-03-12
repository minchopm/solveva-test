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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "./core/core.module";
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CatalogInfoComponent } from './basic-info/catalog-info/catalog-info.component';

@NgModule({
  declarations: [AppComponent, BasicInfoComponent, CatalogInfoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "catalog", component: CatalogComponent },
      { path: "details/:id", component: BasicInfoComponent },
      // { path: "details/:id", component: DetailsComponent },
      // { path: "basic", component: BasicInfoComponent },
      { path: "**", redirectTo: "/catalog" },
    ]),

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    CatalogModule,
    DetailsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
