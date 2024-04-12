import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title: Subject<string> = new Subject<string>();
  subTitle: Subject<string> = new Subject<string>();

  constructor() { }

  setTitle(value : string){
    this.title.next(value);
  }

  getTitle(): Observable<string>{
    return this.title.asObservable();
  }

  setSubTitle(value : string){
    this.subTitle.next(value);
  }

  getSubTitle(): Observable<string>{
    return this.subTitle.asObservable();
  }
}
