import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Studfindone } from '../../Model/ATcommon/studfindone';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class StudfindoneService {

  constructor(private http : HttpClient) { }

  private studentobjecturl = "http://localhost:8080/student/findone";
  

  studentobjectbackdata(info : Studfindone) : Observable<string>{
    return this.http.post<string>(this.studentobjecturl,info,httpOptions);
  }

  studfindbyparent(parentusername : any) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/student/findonestudent?parentusername='+ parentusername,httpOptions);
  }



}
