import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPlayers(): Observable<any> {
    const url = API_URL+'players';
    return this.http
      .get<any>(url);
  }

  getPlayer(id: number): Observable<any> {
    const url = API_URL+'players/'+id;
    return this.http
      .get<any>(url);
  }
}
