import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studattendlist } from '../../Model/Teachermodel/studattendlist';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class StudattendlistService {

  constructor(private http : HttpClient) { }

      private studattendlisturl = "http://localhost:8080/Attendance/findall";
      private studmarkattendurl = "http://localhost:8080/Attendance/markattendance"


    getstudattendlist(teachername : any) : Observable<Studattendlist[]> {
      return this.http.get<Studattendlist[]>('http://localhost:8080/Attendance/findall?teachername='+ teachername , httpOptions);
    }

    setmarkattendance(student : Studattendlist) :Observable<Studattendlist> {
      console.log(student);
      return this.http.post<Studattendlist>(this.studmarkattendurl,student,httpOptions);
    }


}
