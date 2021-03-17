import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Model/login';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  private loginurl ="http://localhost:8080/api/auth/signin";

  loginbackdata(info : Login): Observable<string>{
    return this.http.post<string>(this.loginurl,info,httpOptions);
  }

  roleMatch(allowedRoles) : boolean{
    var isMatch = false;
    var userRole = localStorage.getItem('userAuhtority');
   
    allowedRoles.forEach(element => {
      if(userRole == element){
        isMatch =true;
        return false;
      }
    });
    return isMatch;
  }

}
