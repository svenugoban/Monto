import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class ManageclassService {

  
  constructor(private http : HttpClient) { }

  createclass(classcount : number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/class/createclass?number=' + classcount ,httpOptions);
  }


  assignteacher(teachername : any, classroom : any) : Observable<any>{
    console.log(teachername,classroom);
    return this.http.get<any>('http://localhost:8080/class/assignteacher?teachername='+ teachername + '&classroom=' + classroom , httpOptions);
  }


  issueattendancelist() : Observable<any>{

    return this.http.get<any>('http://localhost:8080/Attendance/add_student_to');

  }

  getclasslist() : Observable<any>{
    return this.http.get<any>('http://localhost:8080/class/findall');
  }
  


}
