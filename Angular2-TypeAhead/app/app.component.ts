import {Component} from 'angular2/core';
import {FormBuilder, Validators} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Http} from 'angular2/http';

@Component({
    selector: 'search',
    templateUrl: 'app/templates/search.tpl.html'
})
export class AppComponent
{
    searchForm: any;
    results: Observable<any>;    
    
    constructor(private fb: FormBuilder, private http: Http){
        this.searchForm = this.fb.group({
            'searchField': ['']
        });

        var ctrl = this.searchForm.controls.searchField;

        this.results = ctrl.valueChanges
                    .debounceTime(500)
                    .switchMap(fieldValue => this.http.get(`http://localhost:3001/api/search?term=${fieldValue}`))
                    .map(res => res.json());
    }
 
}