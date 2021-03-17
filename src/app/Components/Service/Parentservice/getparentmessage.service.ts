import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Sendmessage} from '../../Model/Teachermodel/sendmessage';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class GetparentmessageService {

  constructor(private http : HttpClient) { }

  getparentmessage(parentusername : string) : Observable<any>{
    console.log(parentusername);
    return this.http.get<any>('http://localhost:8080/messages/find?parentusername='+ parentusername,httpOptions)
  }


}
