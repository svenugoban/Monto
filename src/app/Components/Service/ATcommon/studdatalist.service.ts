import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StuddatalistService {

  constructor(private http : HttpClient) { }

  getStudlist() : Observable <Studdatalist[]>{

    return this.http.get<Studdatalist[]>('http://localhost:8080/student/findallstudent');
    
  }

  
}
