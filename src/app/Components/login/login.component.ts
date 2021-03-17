import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/login';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
import { HttpHeaders} from '@angular/common/http';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form : any = {};
    logindata : Login;
    validLogin : boolean = false;
    invalidLogin : boolean = false;
    message : string;
    
    
    constructor(private loginservice : LoginService , private router : Router) { }

    ngOnInit() {
      
      if(localStorage.getItem('userToken') != null)
            if(localStorage.getItem('userAuhtority') == 'ROLE_TEACHER')
            {
              this.router.navigate(['teachstudlist']);
            }
            else if(localStorage.getItem('userAuhtority') == 'ROLE_PARENT')
            {
              this.router.navigate(['parentnewsfeed']);
            }
            else
            {
              this.router.navigate(['adminstudprof']);
            }

      
    }

    onloginform(dataf : any){
      console.log(dataf);
      this.logindata = new Login(this.form.username,this.form.password);
      this.loginservice.loginbackdata(this.logindata).subscribe(
        (datab : any ) =>{
            console.log(datab);
            this.validLogin = true;
            console.log(this.validLogin);
          
            localStorage.setItem('userToken',datab.accessToken);
            localStorage.setItem('userAuhtority',datab.authorities[0].authority);
            localStorage.setItem('userName',datab.username)
            console.log(datab.authorities[0].authority);
            if(datab.authorities[0].authority == "ROLE_PARENT")
              {
              this.router.navigate(['parentnewsfeed']);
              }
            else if(datab.authorities[0].authority == "ROLE_TEACHER")
              {
                this.router.navigate(['teachstudlist']);
              }
            else if(datab.authorities[0].authority == "ROLE_ADMIN")
            {
              this.router.navigate(['adminstudprof']);
            }
        },
        error=>{
            console.log(error)
            this.invalidLogin = true;
            this.message = "User Name or Password is incorrect";
            console.log(this.invalidLogin);
        }
        
      )
    }

    
 



}
