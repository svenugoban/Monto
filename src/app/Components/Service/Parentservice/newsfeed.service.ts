import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Newsfeed } from '../../Model/Parentmodel/newsfeed';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http : HttpClient) { }

  getNewsfeed() : Observable<Newsfeed[]> {
    
    return this.http.get<Newsfeed[]>('http://localhost:8080/newsfeed/findall');
     
  }

}
