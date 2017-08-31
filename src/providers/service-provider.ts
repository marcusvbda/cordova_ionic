
import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider 
{

      api : string = 'http://localhost/cordova_ionic/api/';

      constructor(public http: Http) {}
      getData() 
      {
            return this.http.get(this.api + 'apiRecupera.php').map(res=>res.json())
      }

}