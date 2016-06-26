import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class PlayerService {
    
    constructor(private http: Http){}

    getData(): Observable<Response> {
        return this.http.get('http://localhost:4001/api/search');
    }
}