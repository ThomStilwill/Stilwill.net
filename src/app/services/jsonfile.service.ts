import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonfileService {

    constructor(private http: Http) {}

    public getJSON(file: string) {
         return this.http.get(file + '.json');
     }
}
