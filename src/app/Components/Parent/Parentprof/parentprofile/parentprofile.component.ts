import {Studdatalist} from '../../../Model/ATcommon/studdatalist';
import { Component, OnInit } from '@angular/core';
import {StudfindoneService} from '../../../Service/ATcommon/studfindone';
import { UserimageService } from '../../../Service/Common/userimage.service';
import { User } from '../../../Model/Common/user';


@Component({
  selector: 'app-parentprofile',
  templateUrl: './parentprofile.component.html',
  styleUrls: ['./parentprofile.component.css']
})
export class ParentprofileComponent implements OnInit {

  constructor(private studfindfindbyparent : StudfindoneService, private userimageservice : UserimageService) { }

  user : any;
  childobject : Studdatalist;
  ImageUrl : string ;
  ImageUrlch : string ;
  
  userdetails : User;

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.studfindfindbyparent.studfindbyparent(this.user).subscribe(
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
            this.ImageUrl = 'assets/img/Studentinfo.jpg';
          }
          else
          {
            this.ImageUrl = this.userdetails.webprofileurl;
          }

        })



  }


}
