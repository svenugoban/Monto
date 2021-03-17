import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medsform } from '../../Model/Teachermodel/medsform';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MedsformService {

  constructor(private http : HttpClient) { }

  private medsurl = "http://localhost:8080/meds/add";

  medsformbackdata(info : Medsform) : Observable<string>{
    return this.http.post<string>(this.medsurl,info,httpOptions);
  }

}
