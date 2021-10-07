import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../interfaces/Usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = "https://610f5d459b698d0017175310.mockapi.io/api/v1/usuarios";
  constructor(private http: HttpClient) { }

  login(usuario:string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/?name=${usuario}`);
  }
}
