import { Component, OnInit } from '@angular/core';
import { Registerstudent } from '../../Model/Teachermodel/registerstudent';
import { RegisterstudentService } from '../../Service/Teacherservice/registerstudent.service';
import { Router } from '@angular/router';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'


@Component({
  selector: 'app-teachregstudent',
  templateUrl: './teachregstudent.component.html',
  styleUrls: ['./teachregstudent.component.css']
})
export class TeachregstudentComponent implements OnInit {

  datePickerConfig : Partial<BsDatepickerConfig>;

  date : any;
  

  form : any = {};
  registerstudentfrontdata : Registerstudent;
  validregister : boolean = false;
  invalidregister : boolean =false;
  message : string;
  objectid : any;
  studreg : string ;


  constructor(private registerstudentservice : RegisterstudentService, private route : Router) { 

    this.datePickerConfig = Object.assign({}, 
      {
         containerClass : 'theme-dark-blue',
         dateInputFormat : 'DD/MM/YYYY',
         beforeShowDay : false,
         beforeShowMonth : false

      });
      
  }

  ngOnInit() {
  }


  onregisterform(dataf : any){

    this.date = (<HTMLInputElement>document.getElementById("DateofBirth")).value;
    console.log(this.date);
    
    console.log(dataf);
    this.registerstudentfrontdata = new Registerstudent(this.form.studentid,this.form.studentname,this.form.address,this.date,this.form.sex);

    this.registerstudentservice.registerstudentbackdata(this.registerstudentfrontdata).subscribe(
      (datab : any) => {
        console.log(datab);
        this.validregister = true;
        this.invalidregister = false;
        this.objectid = datab.message;
        console.log(this.objectid);
        // alert("Student details is stored \n  Parent Sign up object id is : "+ this.objectid + "\n copy this object id and input when signup");
        // this.route.navigate(['teachstudlist']);
        console.log(this.validregister);
        
        
     
      },
      error =>{
        console.log(error);
        this.invalidregister = true;
        this.validregister = false;
        this.message = error.error.message;
        console.log(this.invalidregister);

      }
    )

  }

  display(){

     this.route.navigate(['teachstudlist']);


  }



}
