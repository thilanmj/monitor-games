import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsersActivity(): Observable<any> {
    const url = API_URL+'users/activities';
    return this.http
      .get<any>(url);
  }

  getUserActivity(id: number): Observable<any> {
    const url = API_URL+'users/activities/'+id;
    return this.http
      .get<any>(url);
  }
}
