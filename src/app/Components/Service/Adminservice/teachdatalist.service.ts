import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teachdatalist } from '../../Model/Adminmodel/teachdatalist';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class TeachdatalistService {

  constructor(private http : HttpClient) { }

  getteachlist() : Observable <Teachdatalist[]>{

    return this.http.get<Teachdatalist[]>('http://localhost:8080/admin/teacher');
  }


}
