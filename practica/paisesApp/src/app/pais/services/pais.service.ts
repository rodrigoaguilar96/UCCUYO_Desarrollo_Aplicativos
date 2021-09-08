import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pais} from "../interfaces/pais.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino:string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url)
  }
}
