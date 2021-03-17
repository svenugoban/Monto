import {BsDatepickerConfig} from 'ngx-bootstrap/ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leavenote } from '../../Model/Parentmodel/leavenote';
import { LeavenoteService } from '../../Service/Parentservice/leavenote.service';
import {User} from '../../Model/Common/user';
import {UserimageService} from '../../Service/Common/userimage.service';



@Component({
  selector: 'app-parenttop',
  templateUrl: './parenttop.component.html',
  styleUrls: ['./parenttop.component.css']
})
export class ParenttopComponent implements OnInit {

  datePickerConfig : Partial<BsDatepickerConfig>;

  form : any = {};
  validsent : boolean = false;
  invalidsent : boolean = false;
  leavenotefrontdata : Leavenote;
  message : any;

  userName :string;
  userdetails : User ;
  ImageUrl : any;


  constructor(private leavenoteservice : LeavenoteService,  private router : Router, private userimageservice : UserimageService) { 

    this.datePickerConfig = Object.assign({}, 
      {
         containerClass : 'theme-dark-blue',
         dateInputFormat : 'DD/MM/YYYY'
         

      });

      
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName') ;

    this.userimageservice.getuserimage(this.userName).subscribe(
      datab => {
        console.log(datab);
        this.userdetails = datab;

        if(this.userdetails.webprofileurl == null)
          {
            this.ImageUrl = 'assets/img/Studentinfo.jpg';
          }
          else
          {
            this.ImageUrl = this.userdetails.webprofileurl;
          }

      });

  }


  Logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userAuhtority');
  }


  onSubmit(dataf : any){

    console.log(dataf);
    this.leavenotefrontdata = new Leavenote(this.userName,this.form.doa,this.form.reason);

    this.leavenoteservice.leavenotebackdata(this.leavenotefrontdata).subscribe(
      (datab) => {
        console.log(datab);
        this.validsent = true;
        this.invalidsent = false;
        
      },
      error =>{
        console.log(error);
        this.invalidsent = true;
        this.validsent = false;
        this.message = error.error.message;
        console.log(this.message);
        console.log(this.invalidsent);

      }
      
      
    )

  }



}
