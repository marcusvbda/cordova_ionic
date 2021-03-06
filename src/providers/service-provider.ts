
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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

      postData(params)
      {
            let headers = new Headers({'content-Type' : 'application/x-www-form-urlencoded'});
            return this.http.post(this.api+"apiCadastro.php",params,{
               headers  : headers,
               method   : "POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

      deleteData(id)
      {
            let headers = new Headers({'content-Type' : 'application/x-www-form-urlencoded'});
            return this.http.post(this.api+"apiDeleta.php",id,{
               headers  : headers,
               method   : "POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

      updateData(data)
      {
            let headers = new Headers({'content-Type' : 'application/x-www-form-urlencoded'});
            return this.http.post(this.api+"apiUpdate.php",data,{
               headers  : headers,
               method   : "POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

}