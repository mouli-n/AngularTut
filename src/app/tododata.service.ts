import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idata } from './Idata';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class TododataService {
  private _Url: string = '/assets/jsonData/data.json';
  constructor(private http: HttpClient) {}
  getTodoData(): Observable<Idata[]> {
    return this.http.get<Idata[]>(this._Url);
  }
}
