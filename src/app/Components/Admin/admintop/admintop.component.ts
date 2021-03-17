import { Component, OnInit } from '@angular/core';
import { ResetpasswordService } from '../../Service/Adminservice/resetpassword.service';
import { ManageclassService } from '../../Service/Adminservice/manageclass.service';

@Component({
  selector: 'app-admintop',
  templateUrl: './admintop.component.html',
  styleUrls: ['./admintop.component.css']
})
export class AdmintopComponent implements OnInit {


  form : any = {};
  form1 : any = {};
  validsent : boolean = false;
  invalidsent : boolean = false;
  resetfrontdata
  message : any;

  cuserName : string

  username : any;
  password : any;

  classcount : any;


  constructor(private userrpassword : ResetpasswordService, private manageclass : ManageclassService) { }

  ngOnInit() {
    this.cuserName = localStorage.getItem('userName');

    
  }


  Logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userAuhtority');

  }


  onSubmit(dataf : any){

    console.log(dataf);
    this.username = this.form.username;
    this.password = this.form.newpassword;
    console.log(this.username);
    console.log(this.password);

    this.userrpassword.resetuserpassword(this.username,this.password).subscribe(
      datab => {
        console.log(datab);
        this.validsent = true;
        this.invalidsent = false;

      },
      error => {
        console.log(error)
        this.invalidsent = true;
        this.validsent = false;
        this.message = error.error.message;
      })

  }

  onclassSubmit(dataf : number){

    console.log(dataf);
    this.classcount = this.form1.classcount;
    console.log(this.classcount);

    this.manageclass.createclass(this.classcount).subscribe(
      datab =>{
        console.log(datab);
        this.validsent = true;
        this.invalidsent =false;
        localStorage.setItem('classcount',this.classcount);

      })


  }




}
