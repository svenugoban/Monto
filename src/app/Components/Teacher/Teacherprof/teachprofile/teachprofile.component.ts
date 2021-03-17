import { Component, OnInit } from '@angular/core';
import {Teachdatalist} from '../../../Model/Adminmodel/teachdatalist';
import {TeachfindoneService} from '../../../Service/Adminservice/teachfindone.service';
import { UserimageService } from '../../../Service/Common/userimage.service';
import { User } from '../../../Model/Common/user';


@Component({
  selector: 'app-teachprofile',
  templateUrl: './teachprofile.component.html',
  styleUrls: ['./teachprofile.component.css']
})


export class TeachprofileComponent implements OnInit {

  user : any;
  teachobject : Teachdatalist;

  ImageUrl : any ;
  userdetails : User ;

  constructor(private teachinfoservice : TeachfindoneService, private userimage : UserimageService ) { }

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.teachinfoservice.teachobjectbyusername(this.user).subscribe(
      datab => {
        console.log(datab);
        this.teachobject = datab;

      })

      this.userimage.getuserimage(this.user).subscribe(
        datab => {
          console.log(datab);
          this.userdetails = datab;
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



}
