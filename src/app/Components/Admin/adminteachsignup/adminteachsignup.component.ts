import { Component, OnInit } from '@angular/core';
import { Teachersignup } from '../../Model/Adminmodel/teachersignup';
import { SignupService } from '../../Service/signup.service';
import { Router } from '@angular/router';
import { ConnectteacherService } from '../../Service/Adminservice/connectteacher.service';

@Component({
  selector: 'app-adminteachsignup',
  templateUrl: './adminteachsignup.component.html',
  styleUrls: ['./adminteachsignup.component.css']
})
export class AdminteachsignupComponent implements OnInit {

  form : any = {};
  gform : any = {};
  signupfrontdata : Teachersignup;
  validsignup : boolean = false;
  invalidsignup : boolean =false;
  validconnect : boolean = false;
  invalidconnect : boolean = false;

  message : string;

  Generatecode : any;
  

  constructor(private signservice : SignupService, private connectteacher : ConnectteacherService ,private route : Router) { }

  ngOnInit() {
  }

  onsignupform(dataf : any){

    console.log(dataf);
    this.signupfrontdata = new Teachersignup(this.form.username,this.form.email,this.form.password,this.form.user);

    this.signservice.signupbackdata(this.signupfrontdata).subscribe(
      (datab : any)=>{
        console.log(datab);
        this.validsignup = true;
        this.invalidsignup = false;
        this.Generatecode = localStorage.getItem('objectid1');
        console.log(this.validsignup);
        // this.route.navigate(['adminteachprof']);
      },
      error => {
        console.log(error);
        this.invalidsignup = true;
        this.validsignup = false;
        this.message = error.error.message;
        console.log(this.invalidsignup);
      }
    )

  }

  


  gSubmit(){

    console.log(this.form.username);
    console.log(this.Generatecode);
    
    

  this.connectteacher.connectteach(this.Generatecode,this.form.username).subscribe(
    datab =>{
      console.log(datab);
      this.validconnect = true;
      alert("connected");
      localStorage.removeItem('objectid');
      this.route.navigate(['adminteachprof']);
    })

  }
  
 



}
