import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TeachfindoneService {

  constructor(private http : HttpClient) { }

  

  teachobjectbackdata(teacherid : any) : Observable<any> {
    return this.http.post<any>('http://localhost:8080/teacherinfo/findone?teacherid='+ teacherid , httpOptions);
  }


  teachobjectbyusername(teacherusername : any) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/teacherinfo/findinfo?teacherusername=' + teacherusername , httpOptions);
  }


  
}
