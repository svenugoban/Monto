import { Component, OnInit } from '@angular/core';
import { StudattendlistService } from '../../Service/Teacherservice/studattendlist.service';
import { Studattendlist } from '../../Model/Teachermodel/studattendlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachcheck',
  templateUrl: './teachcheck.component.html',
  styleUrls: ['./teachcheck.component.css']
})
export class TeachcheckComponent implements OnInit {


  studattend : Studattendlist[];
  studattendlist : Studattendlist[] = [];
  studfiltattendlist : Studattendlist;
  searchterm : any;

  validattend : boolean = false;
  invalidattend : boolean = false;
  
  user : any;

  constructor(private studattendlistservice : StudattendlistService, private studmarkattend : StudattendlistService, private router : Router) { }

  ngOnInit() {


    this.user = localStorage.getItem('userName');

      this.studattendlistservice.getstudattendlist(this.user).subscribe(
        datab =>{
          console.log(datab);
           this.studattend = datab;
           
           if(datab == null){
           this.invalidattend = true;
           this.validattend = false;
           }
           else
           {
            this.validattend = true;
           }

        })
  }
  

  OnSubmit(){
  
    this.studattendlist = [];
    this.studattend.forEach(student => {

      if(student.present == undefined){
        student.present =false;
      }
          
      
        
      this.studmarkattend.setmarkattendance(student).subscribe(
        datab  => {
          console.log(datab);
          this.router.navigate(['teachcheck']);
        })
      
  
    });

    
    
    

    
    
  }



}
