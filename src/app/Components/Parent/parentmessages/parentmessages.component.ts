import { Component, OnInit } from '@angular/core';
import { Getmessage } from '../../Model/Teachermodel/getmessage';
import { GetmessageService } from '../../Service/Teacherservice/getmessage.service';
import { GetparentmessageService } from '../../Service/Parentservice/getparentmessage.service';
import { Sendmessage } from '../../Model/Teachermodel/sendmessage';

@Component({
  selector: 'app-parentmessages',
  templateUrl: './parentmessages.component.html',
  styleUrls: ['./parentmessages.component.css']
})
export class ParentmessagesComponent implements OnInit {


  messagelist : Sendmessage;

  parentusername : any;

  constructor(private getparentmessage : GetparentmessageService) { }

  

  ngOnInit() {

    this.parentusername = localStorage.getItem('userName');

    this.getparentmessage.getparentmessage(this.parentusername).subscribe(
      datab => {
        console.log(datab);
        this.messagelist = datab;
      }
    )

  }








}
