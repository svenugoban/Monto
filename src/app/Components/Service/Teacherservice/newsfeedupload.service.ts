import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class NewsfeeduploadService {

  constructor(private http : HttpClient) { }

  private newsfeeduploadurl = "http://localhost:8080/newsfeed/upload";

  newsfeeduploadbackdata(formData : FormData) : Observable<any>{
    console.log(formData);
    return this.http.post(this.newsfeeduploadurl,formData);
  }

}
