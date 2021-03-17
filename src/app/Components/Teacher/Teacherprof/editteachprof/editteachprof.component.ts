import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Teachdatalist} from '../../../Model/Adminmodel/teachdatalist';
import {TeachfindoneService} from '../../../Service/Adminservice/teachfindone.service';
import { UserimageService } from '../../../Service/Common/userimage.service';
import { EdituserdetailService } from '../../../Service/Common/edituserdetail.service';
import { error } from 'util';
import { User } from '../../../Model/Common/user';




@Component({
  selector: 'app-editteachprof',
  templateUrl: './editteachprof.component.html',
  styleUrls: ['./editteachprof.component.css']
})
export class EditteachprofComponent implements OnInit {

  form : any = {};
  validsubmit : boolean = false;
  invalidsubmit : boolean =false;

  ImageUrl : any  ;
  FileToUpload : File = null;

  user : any;
  teachobject : Teachdatalist;
  errormessage : any;
  userdetails : User ;

  constructor(private router : Router, private teachobjectservice : TeachfindoneService, private userimageservice : UserimageService, private saveuser : EdituserdetailService) { }

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.teachobjectservice.teachobjectbyusername(this.user).subscribe(
      datab =>{
        console.log(datab);
        this.teachobject = datab;

      })

      this.userimageservice.getuserimage(this.user).subscribe(
        datab => {
          console.log(datab);
          this.userdetails = datab ;
          if(this.userdetails.webprofileurl == null)
          {
            this.ImageUrl = 'assets/img/teacher.png';
          }
          else
          {
            this.ImageUrl = this.userdetails.webprofileurl;
          }

        }
      )

  }

  handleFileInput(file : FileList){

    this.FileToUpload = file.item(0);
    console.log(this.FileToUpload);
    //show image preview
    var reader = new FileReader();
    reader.onload = (event : any) =>{
      this.ImageUrl = event.target.result;
      
    }
    reader.readAsDataURL(this.FileToUpload);

    var formDatauser = new FormData();
    formDatauser.append('name',this.user);
    formDatauser.append('file',this.FileToUpload);

    this.userimageservice.saveuserimage(formDatauser).subscribe(
      datab => {

        console.log(datab);

      })



  }

  onSubmit(dataf : any){

    console.log(dataf);
   

    this.saveuser.saveuserdetail(this.form.currentpassword,this.form.newpassword,this.user).subscribe(
      datab => {
        console.log(datab);
        alert("Successfully Saved");
        this.validsubmit = true;
        this.invalidsubmit = false;
      },
      error => {
        this.invalidsubmit = true;
        this.validsubmit = false;
        this.errormessage = error.error.message;
      }

    )


    // this.router.navigate(['teachprofile']);
  }

}
