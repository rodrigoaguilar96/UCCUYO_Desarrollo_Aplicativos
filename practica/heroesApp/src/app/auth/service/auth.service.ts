import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/Usuario";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl :string = "https://610f5d459b698d0017175310.mockapi.io/api/v1/usuarios";
  constructor(private http: HttpClient) { }

  login(usuario:string):Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/?name=${usuario}`)
  }
}
