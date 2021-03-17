import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Signup } from '../Model/signup';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http :HttpClient) { }

  private signupurl ="http://localhost:8080/api/auth/signup";
  private generatecodeurl = "http://localhost:8080/parent/connectparent"

  signupbackdata(info : Signup): Observable<string>{
    console.log(info);
    return this.http.post<string>(this.signupurl,info,httpOptions);
  }

  generatecodebackdata( generatecode : any, pusername : string){
    console.log(generatecode,pusername);
    return this.http.post<string>('http://localhost:8080/parent/connectparent?generatecode='+ generatecode +'&username='+ pusername ,httpOptions);

  }


}
