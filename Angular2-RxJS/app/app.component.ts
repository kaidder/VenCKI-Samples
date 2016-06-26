import { Component } from '@angular/core';
import { PlayerService } from './playerService';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app-component-template.tpl.html',
  providers: [PlayerService]
})
export class AppComponent { 
  players:Array<any> = []; 
  private serviceInstance: Observable<Response>;

  ngOnInit(){
    this.serviceInstance = this.service.getData();
  }

  getData(){
    this.serviceInstance
      .map(result => result.json())
      .subscribe( result => this.players = result);
  }

  getDataAsAPromise(){
    this.service.getDataAsAPromise().then( result => this.players = result.json(), error => console.log(error));
  }

  constructor(private service: PlayerService){}
  
}
