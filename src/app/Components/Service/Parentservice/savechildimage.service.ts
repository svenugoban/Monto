import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SavechildimageService {

  constructor(private http : HttpClient) { }

  private savechildurl = "http://localhost:8080/student/imageupload";

  savechilimage(formData : FormData) : Observable<any> {
    console.log(formData);
    return this.http.post(this.savechildurl,formData);
  }


}
