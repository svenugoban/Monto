import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Getmessage } from '../../Model/Teachermodel/getmessage';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GetmessageService {

  constructor(private http : HttpClient) { }

  private getmessageurl = "http://localhost:8080/messages/findone";
  

  getmessage(info : Getmessage) : Observable<any>{
    return this.http.post<any>(this.getmessageurl,info,httpOptions);
  }

 

}
