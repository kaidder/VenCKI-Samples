import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class PlayerService {
    
    constructor(private http: Http){}

    getData(): Observable<Response> {
        return this.http.get('api/search');
    }

    getDataAsAPromise(): Promise<Response> {
        return this.http.get('api/search').toPromise();
    }
}