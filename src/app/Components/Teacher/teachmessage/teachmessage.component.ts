import { Component, OnInit, ɵConsole } from '@angular/core';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';
import { StuddatalistService } from '../../Service/ATcommon/studdatalist.service';
import { Studfindone } from '../../Model/ATcommon/studfindone';
import { StudfindoneService } from '../../Service/ATcommon/studfindone';
import { MessageService } from '../../Service/Teacherservice/message.service';
import { DatePipe } from '@angular/common';
import { Sendmessage } from '../../Model/Teachermodel/sendmessage';
import { Getmessage } from '../../Model/Teachermodel/getmessage';
import { GetmessageService } from '../../Service/Teacherservice/getmessage.service';



@Component({
  selector: 'app-teachmessage',
  templateUrl: './teachmessage.component.html',
  styleUrls: ['./teachmessage.component.css'],
  providers: [DatePipe]

})
export class TeachmessageComponent implements OnInit {

  form : any = {};

  studlist : Studdatalist[];
  searchterm : string;

  validclick : boolean = false;

  studentname : any;
  studobject : Studdatalist;
  messageheadname : any ;
  messagedatafront : Sendmessage;
  studteach : Getmessage;

  dt : any = new Date();
  cdate : any ;
  ctime : any ;

  user : any;
  messagelist : Sendmessage;

  ImageUrl : any;

  constructor(private datepipe : DatePipe , private studdatalist : StuddatalistService, private studfindoneservice : StudfindoneService, private sendmessageservice : MessageService, private getmessgeservice : GetmessageService) 
  {
    
    this.cdate = this.datepipe.transform(this.dt,'dd-MM-yyyy')
    this.ctime = this.datepipe.transform(this.dt,'HH:mm:ss')
    
  }

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.studdatalist.getStudlist().subscribe(
      datab => {
        console.log(datab);
        this.studlist =datab;
        
      })


  }


  selectStudentbox(f:any){

      this.studteach = new Getmessage(this.messageheadname,this.user);

      this.getmessgeservice.getmessage(this.studteach).subscribe(
        datab => {
          console.log(datab);
          this.messagelist = datab;
        })

      

        console.log(f);
        this.studentname = new Studfindone(f);
        this.studfindoneservice.studentobjectbackdata(this.studentname).subscribe(
          (datab:any) =>{
            console.log(datab);
            this.studobject = datab;
            this.messageheadname = this.studobject.studentname;


          })
        
  }

   
  onSubmit(dataf : any) {

    console.log(dataf);
    console.log(this.cdate);    
    console.log(this.user);

    this.messagedatafront = new Sendmessage(this.messageheadname,this.form.message,this.user,this.ctime,this.cdate);

    this.sendmessageservice.sendmessage(this.messagedatafront).subscribe(
      datab => {
        console.log(datab);

      }
    )
  }
 







}


