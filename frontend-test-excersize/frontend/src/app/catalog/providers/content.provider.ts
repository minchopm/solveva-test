import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "../interfaces/page";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContentProvider {
  constructor(private http: HttpClient) {}

  getData(page: number){
    const params = new HttpParams().set("page", page);

    return  this.http.get(environment.base + "/data",  {params} )as Observable<Page> ;
  }

}
