import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../Service/Parentservice/notification.service';
import { Notification } from '../../Model/Parentmodel/notification';

@Component({
  selector: 'app-parentnotification',
  templateUrl: './parentnotification.component.html',
  styleUrls: ['./parentnotification.component.css']
})
export class ParentnotificationComponent implements OnInit {


  user : any ;
  meds : Notification[];

  constructor(private notificationservice : NotificationService) { }

  ngOnInit() {

    this.user = localStorage.getItem('userName');
    this.notificationservice.getmeds(this.user).subscribe(
      datab => {
        console.log(datab);
        this.meds = datab;
        
      })

      
  }




}
