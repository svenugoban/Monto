import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private http : HttpClient) { }


  getnotification(parentusername : any) : Observable<any>{

    return this.http.get<any>('http://localhost:8080/notification/find?parentusername='+ parentusername);

  }

  getmeds(parentusername : any) : Observable<any> {
    return this.http.get<any>('http://localhost:8080/meds/findone?parentusername='+ parentusername );
  }


}
