import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserimageService {

  private userimageurl = "http://localhost:8080/profileimage/upload";

  constructor(private http : HttpClient ) { }

  saveuserimage(formData : FormData) : Observable<any> {
    console.log(formData);
    return this.http.post(this.userimageurl,formData);
  }

  getuserimage(username : any) : Observable <any> {
    console.log(username);
    return this.http.get<any>('http://localhost:8080/androidlogin/find?username='+ username);
  }


}

