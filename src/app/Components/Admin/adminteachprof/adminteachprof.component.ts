import { Component, OnInit } from '@angular/core';
import { Teachdatalist } from '../../Model/Adminmodel/teachdatalist';
import { TeachdatalistService } from '../../Service/Adminservice/teachdatalist.service';
import { TeachfindoneService } from '../../Service/Adminservice/teachfindone.service';

@Component({
  selector: 'app-adminteachprof',
  templateUrl: './adminteachprof.component.html',
  styleUrls: ['./adminteachprof.component.css']
})
export class AdminteachprofComponent implements OnInit {

  teachlist : Teachdatalist [];
  teachobject : Teachdatalist ;
  tsearchterm : string;
  teacherid : any;
  



  constructor(private teachdatalistservice : TeachdatalistService, private findteacher : TeachfindoneService  ) { }

  ngOnInit() {

    this.teachdatalistservice.getteachlist().subscribe(
      datab => {
        console.log(datab);
        this.teachlist = datab;
      })
  }



  viewprofile(f:any){
    console.log(f);
    this.teacherid = f;

    this.findteacher.teachobjectbackdata(this.teacherid).subscribe(
      datab => {
        console.log(datab);
        this.teachobject = datab
      }
    )
    

  }


}
