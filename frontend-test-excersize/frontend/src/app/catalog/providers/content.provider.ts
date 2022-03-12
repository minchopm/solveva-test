import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "../interfaces/page";

@Injectable({
  providedIn: "root",
})
export class ContentProvider {
  constructor(private http: HttpClient) {}

  getData(page: number){
    const params = new HttpParams().set("page", page);

    return  this.http.get("/data",  {params} )as Observable<Page> ;
  }

  getElement(param: number){
    // const params = new HttpParams().set("page", page);

    return  this.http.get(`/data/${param}`)as Observable<Page> ;
  }

}
