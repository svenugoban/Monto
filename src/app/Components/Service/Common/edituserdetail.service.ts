import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class EdituserdetailService {

  constructor(private http : HttpClient) { }

  saveuserdetail(oldpass : any, newpass : any, username : any) :Observable<any> {
   return this.http.post<any>('http://localhost:8080/teacherinfo/changepassword?oldpass=' + oldpass + '&newpass= ' + newpass + '&username='+ username , httpOptions)
  }
    


}
