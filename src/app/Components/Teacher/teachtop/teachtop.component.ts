import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/Common/user';
import { UserimageService } from '../../Service/Common/userimage.service';
import { error } from 'util';

@Component({
  selector: 'app-teachtop',
  templateUrl: './teachtop.component.html',
  styleUrls: ['./teachtop.component.css']
})
export class TeachtopComponent implements OnInit {

  userName :string
  userdetails : User;
  ImageUrl : any;

  constructor(private userimageservice : UserimageService) { }

  ngOnInit() {
     this.userName = localStorage.getItem('userName') ;

    this.userimageservice.getuserimage(this.userName).subscribe(
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

      })


  }

  Logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userAuhtority');

  }



  

}
