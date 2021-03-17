import { Component, OnInit } from '@angular/core';
import { Registerteacher } from '../../Model/Adminmodel/registerteacher';
import { RegisterteacherService } from '../../Service/Adminservice/registerteacher.service';
import { Router } from '@angular/router';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-adminregteacher',
  templateUrl: './adminregteacher.component.html',
  styleUrls: ['./adminregteacher.component.css']
})
export class AdminregteacherComponent implements OnInit {

  datePickerConfig : Partial<BsDatepickerConfig>;

  date : any;

  form : any = {};
  registerteacherfrontdata : Registerteacher;
  validregister : boolean = false;
  invalidregister ; boolean =false;

  objectid : any;
  
  constructor(private registerteacherservice : RegisterteacherService, private route : Router) { 

    this.datePickerConfig = Object.assign({}, 
      {
         containerClass : 'theme-dark-blue',
         dateInputFormat : 'DD/MM/YYYY'

      });

  }

  ngOnInit() {

  }

  onregisterform(dataf : any){

    this.date = (<HTMLInputElement>document.getElementById("DateofBirth")).value;
    console.log(this.date);


    console.log(dataf);
    this.registerteacherfrontdata = new Registerteacher(this.form.teacherid, this.form.teachername, this.form.address, this.date, this.form.sex,this.form.qualification);

    this.registerteacherservice.registerteacherbackdata(this.registerteacherfrontdata).subscribe(
      (datab : any) => {
        console.log(datab);
        this.validregister =true;
        this.objectid = datab.message;
        console.log(this.objectid);
        localStorage.removeItem('objectid1');
        localStorage.setItem('objectid1',this.objectid);
        alert("Teacher details added");
        this.route.navigate(['adminteachsignup']);
      }
    )

    

  }

}
