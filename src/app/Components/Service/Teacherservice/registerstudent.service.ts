import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registerstudent } from '../../Model/Teachermodel/registerstudent';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterstudentService {

  constructor(private http : HttpClient) { }

  private registerstudenturl ="http://localhost:8080/student/add";

  registerstudentbackdata(info : Registerstudent) : Observable<string>{
    console.log(info);
    return this.http.post<string>(this.registerstudenturl,info,httpOptions);
  }
  
}
