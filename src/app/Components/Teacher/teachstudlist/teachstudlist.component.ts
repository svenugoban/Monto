import { Component, OnInit } from '@angular/core';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';
import { StuddatalistService } from '../../Service/ATcommon/studdatalist.service';
import { Studfindone } from '../../Model/ATcommon/studfindone';
import { StudfindoneService } from '../../Service/ATcommon/studfindone';



@Component({
  selector: 'app-teachstudlist',
  templateUrl: './teachstudlist.component.html',
  styleUrls: ['./teachstudlist.component.css']
})


export class TeachstudlistComponent implements OnInit {

  studlist : Studdatalist[];
  studobject : Studdatalist;
  searchterm : string; 
  studentname : any;
  

  constructor(private studdatalistservice : StuddatalistService,  private studfindoneservice:StudfindoneService ) { }

  ngOnInit() {

    this.studdatalistservice.getStudlist().subscribe(
      (datab : any) => {
        console.log(datab);
        this.studlist = datab;
      }      
    )

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
