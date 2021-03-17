import { Component, OnInit } from '@angular/core';
import {Studdatalist} from '../../../Model/ATcommon/studdatalist';
import {StudfindoneService} from '../../../Service/ATcommon/studfindone';
import { UserimageService } from '../../../Service/Common/userimage.service';
import { SavechildimageService } from '../../../Service/Parentservice/savechildimage.service';
import { EdituserdetailService } from '../../../Service/Common/edituserdetail.service';
import { User } from '../../../Model/Common/user';






@Component({
  selector: 'app-editparentprofile',
  templateUrl: './editparentprofile.component.html',
  styleUrls: ['./editparentprofile.component.css']
})
export class EditparentprofileComponent implements OnInit {

  form : any = {};
  validsubmit : boolean = false;
  invalidsubmit : boolean =false;

  ImageUrl : string ;
  ImageUrlch : string ;
  FileToUpload : File = null;
  FileToUploadch : File = null;

  user : any;
  childobject : Studdatalist;
  errormessage : any;
  userdetails : User;


  constructor(private studfindbyparent : StudfindoneService, private userimage : UserimageService, private childimage : SavechildimageService, private saveuser : EdituserdetailService, private userimageservice : UserimageService) { }

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.studfindbyparent.studfindbyparent(this.user).subscribe(
      datab => {
        console.log(datab);
        this.childobject = datab;
        
        if(datab.profilepicUrl == null){
          this.ImageUrlch = "assets/img/Studentinfo.jpg";
        }
        else 
        {
          this.ImageUrlch = datab.profilepicUrl;
        }
        
      })

      this.userimageservice.getuserimage(this.user).subscribe(
        datab => {
          console.log(datab);
          this.userdetails = datab;
          if(this.userdetails.webprofileurl == null)
          {
            this.ImageUrl = 'assets/img/Studentinfo.jpg' ;
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

    this.userimage.saveuserimage(formDatauser).subscribe(
      datab =>{
        console.log(datab);
      }
    )


  }

  handleFileInputch(file : FileList){

    this.FileToUploadch = file.item(0);
    console.log(this.FileToUploadch);

    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.ImageUrlch = event.target.result;

    }
    reader.readAsDataURL(this.FileToUploadch);

    var formDatachild = new FormData();

    formDatachild.append('parentusername',this.user);
    formDatachild.append('file',this.FileToUploadch);

    this.childimage.savechilimage(formDatachild).subscribe(
      datab => {
        console.log(datab);
      }
    )


  }




  onSubmit(dataf : any){

    console.log(dataf);

    
    this.saveuser.saveuserdetail(this.form.currentpassword,this.form.newpassword,this.user).subscribe(
      datab => {
        console.log(datab);
        this.validsubmit = true;
        this.invalidsubmit = false;


      },
      error =>{
        this.invalidsubmit = true;
        this.validsubmit = false;
        this.errormessage = error.error.message;
        

      }
    )
   
    


    


  }






}
