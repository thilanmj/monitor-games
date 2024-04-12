import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTeams(): Observable<any> {
    const url = API_URL+'teams';
    return this.http
      .get<any>(url);
  }

  getTeam(id: number): Observable<any> {
    const url = API_URL+'teams/'+id;
    return this.http
      .get<any>(url);
  }
}
