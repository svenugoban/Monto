import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footeral',
  templateUrl: './footeral.component.html',
  styleUrls: ['./footeral.component.css']
})
export class FooteralComponent implements OnInit {

  userName : string;
  
  constructor(private router : Router) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }

  returnRoleProfile(){

    if(localStorage.getItem('userAuhtority') == 'ROLE_TEACHER')
      {
       this.router.navigate(['teachprofile']);
      }
    else if(localStorage.getItem('userAuhtority') == 'ROLE_PARENT')
      {
       this.router.navigate(['parentprofile']);
      }
    else if((localStorage.getItem('userAuhtority') == 'ROLE_ADMIN'))
      {
        this.router.navigate(['adminprof']);
      }

  }


}
