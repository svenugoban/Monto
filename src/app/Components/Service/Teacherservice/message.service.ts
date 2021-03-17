import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Sendmessage } from '../../Model/Teachermodel/sendmessage';
import { Observable } from 'rxjs';
import { Getmessage } from '../../Model/Teachermodel/getmessage';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})


export class MessageService {

  constructor(private http : HttpClient) { }

  private sendmessageurl = "http://localhost:8080/messages/add";

  sendmessage(info : Sendmessage) : Observable<any>{
    return this.http.post<string>(this.sendmessageurl,info,httpOptions);
  }

 
}
