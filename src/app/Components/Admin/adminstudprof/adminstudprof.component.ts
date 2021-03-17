import { Component, OnInit } from '@angular/core';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';
import { StuddatalistService } from '../../Service/ATcommon/studdatalist.service';
import { Studfindone } from '../../Model/ATcommon/studfindone';
import { StudfindoneService } from '../../Service/ATcommon/studfindone';

@Component({
  selector: 'app-adminstudprof',
  templateUrl: './adminstudprof.component.html',
  styleUrls: ['./adminstudprof.component.css']
})

export class AdminstudprofComponent implements OnInit {

  studlist : Studdatalist[];
  studobject : Studdatalist;
  searchterm : string; 
  studentname : any;

  ImageUrlch : any ="assets/img/Studentinfo.jpg" ;
  Imagearray : any;
  
  constructor(private studdatalist : StuddatalistService, private studfindoneservice : StudfindoneService ) { }

  ngOnInit() {

    this.studdatalist.getStudlist().subscribe(
      datab => {
        console.log(datab);
        this.studlist = datab;
        
        this.studlist.forEach( student =>{
          
        })
          
        

      })
  }
  

  viewprofile(f:any){
    console.log(f);
    this.studentname = new Studfindone(f);
    this.studfindoneservice.studentobjectbackdata(this.studentname).subscribe(
      (datab:any) =>{
        console.log(datab);
        this.studobject = datab;
        
         
      }
    )

  }




}
