import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedService } from '../../Service/Parentservice/newsfeed.service';
import { Newsfeed } from '../../Model/Parentmodel/newsfeed';



@Component({
  selector: 'app-parentnewsfeed',
  templateUrl: './parentnewsfeed.component.html',
  styleUrls: ['./parentnewsfeed.component.css']
})
export class ParentnewsfeedComponent implements OnInit {

  
   newsfeeds : Newsfeed[];

  constructor(private newsfeedservice : NewsfeedService) { }

  ngOnInit() {

    this.newsfeedservice.getNewsfeed().subscribe(
      datab => {
        console.log(datab);
        this.newsfeeds = datab
      });
    

    
    
  }


 


}
