import { Injectable } from '@angular/core';
import { Leavenote } from '../../Model/Parentmodel/leavenote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class LeavenoteService {

  constructor(private http : HttpClient) { }


  private leavenoteurl = "http://localhost:8080/absent-report/absent";

  leavenotebackdata(info : Leavenote) : Observable<string>{
    console.log(info);
    return this.http.post<string>(this.leavenoteurl,info,httpOptions);

  }


}
