import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pelicula} from "../interfaces/pelicula.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PeliculasServicesService {
  public key:string;
  public REST_API_URL:string;

  constructor(private _http : HttpClient) {

    this.key = "728fe964";
    this.REST_API_URL = "https://www.omdbapi.com/";

  }

  public getPeliculas(titulo:string, year?:string):Observable<Pelicula>{

    let url = this.REST_API_URL + "?t=" + titulo + "&y=" + year + "&apikey=" + this.key;
    return this._http.get<Pelicula>(url);
  }
}
