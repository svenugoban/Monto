import { Component, OnInit } from '@angular/core';
import { UserimageService } from '../../../Service/Common/userimage.service';
import { User } from '../../../../Components/Model/Common/user';

@Component({
  selector: 'app-adminprof',
  templateUrl: './adminprof.component.html',
  styleUrls: ['./adminprof.component.css']
})
export class AdminprofComponent implements OnInit {


  user : any ;
  userdetails : User; 

  constructor(private userimagedetails : UserimageService ) { }

  ngOnInit() {

    this.user = localStorage.getItem('userName');

    this.userimagedetails.getuserimage(this.user).subscribe(
      datab => {
        console.log(datab);
        this.userdetails = datab;

      }
    )

  }

}
