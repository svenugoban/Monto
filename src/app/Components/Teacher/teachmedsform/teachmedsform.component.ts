import { Component, OnInit } from '@angular/core';
import { Medsform } from '../../Model/Teachermodel/medsform';
import { MedsformService } from '../../Service/Teacherservice/medsform.service';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';
import { StuddatalistService } from '../../Service/ATcommon/studdatalist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachmedsform',
  templateUrl: './teachmedsform.component.html',
  styleUrls: ['./teachmedsform.component.css']
})
export class TeachmedsformComponent implements OnInit {

  form : any = {};
  medsformfrontdata : Medsform;
  validmeds :boolean;
  invalidmeds : boolean;

  studlist : Studdatalist[];

  constructor(private medsformservice :MedsformService,private studlistservice : StuddatalistService, private router : Router ) { }

  ngOnInit() {

    this.studlistservice.getStudlist().subscribe(
      datab => {
        console.log(datab);
        this.studlist = datab;

      })

  }

  onmedsform(dataf : any){
    console.log(dataf)
    this.medsformfrontdata = new Medsform(this.form.studentname,this.form.time,this.form.date,this.form.incident,this.form.firstaid,this.form.medid);

    this.medsformservice.medsformbackdata(this.medsformfrontdata).subscribe(
      (datab :any) => {
        console.log(datab);
        this.validmeds = true;
        alert("Sucessfull sent");
        this.router.navigate(['teachstudlist']);
        
      }
    )

    


  }

}
