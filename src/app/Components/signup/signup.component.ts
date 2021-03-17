import { Component, OnInit } from '@angular/core';
import { Signup } from '../Model/signup';
import { SignupService } from '../Service/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    form : any = {};
    signupfrontdata : Signup;
    validsignup : boolean = false;
    invalidsignup : boolean =false;
    message : string;

    generatecode : any;

    constructor( private signservice : SignupService, private router : Router) { }

    ngOnInit() {

    }

    

    onsignupform(dataf : any){
     
      console.log(dataf);
      this.signupfrontdata = new Signup(this.form.username,this.form.email,this.form.password,this.form.user);

      this.signservice.signupbackdata(this.signupfrontdata).subscribe(
        (datab : any)=>{
          console.log(datab);
          this.validsignup = true;
          this.invalidsignup = false;
          // alert("Your account is created");
          console.log(this.validsignup);
          // this.router.navigate(['login']);
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


    display(){
      
      console.log(this.generatecode);
      
      this.signservice.generatecodebackdata(this.generatecode,this.form.username).subscribe(
        (datab : any) => {
          console.log(datab);
          alert("connected");
          this.router.navigate(['login']);
        }
      )

    }
    

}
