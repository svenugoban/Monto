import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ConnectteacherService {

  constructor(private http : HttpClient) { }


  connectteach( generatecode : any, username : string) : Observable<any> {
    console.log(generatecode,username);
    return this.http.post<any>('http://localhost:8080/teacherinfo/connect?generatecode='+ generatecode +'&username='+ username, httpOptions);

  }

  




}
