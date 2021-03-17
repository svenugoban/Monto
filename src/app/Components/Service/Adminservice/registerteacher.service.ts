import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Registerteacher } from '../../Model/Adminmodel/registerteacher';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class RegisterteacherService {

  constructor(private http : HttpClient) { }

  private registerteacherurl = "http://localhost:8080/teacherinfo/add";

  registerteacherbackdata(info : Registerteacher) : Observable<string>{
    console.log(info);
    return this.http.post<string>(this.registerteacherurl,info,httpOptions);
  }
}
