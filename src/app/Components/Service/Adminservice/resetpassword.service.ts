import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private http : HttpClient) { }



  resetuserpassword(username : any, newpassword : any) : Observable<any> {

    console.log(username,newpassword);
    return this.http.post<any>('http://localhost:8080/admin/resetpassword?username='+ username +'&newpassword='+ newpassword,httpOptions);

  }
   
  



}
