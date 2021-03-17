import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ManageclassService } from '../../Service/Adminservice/manageclass.service';
import { Classroom } from '../../Model/Adminmodel/classroom';

@Component({
  selector: 'app-studentclasses',
  templateUrl: './studentclasses.component.html',
  styleUrls: ['./studentclasses.component.css']
})
export class StudentclassesComponent implements OnInit {

  classlist : Classroom[];

  classcount : any;
  classes : any = [];



  constructor(private manageclassservice : ManageclassService ) { }

 

  ngOnInit() {


    
    this.manageclassservice.getclasslist().subscribe(
      datab => {
        console.log(datab);
        this.classlist = datab;

      })

      this.classcount = localStorage.getItem('classcount');
        console.log(this.classcount);
        
        for(var i = 0; i < this.classcount;  i++){

          this.classes.push('class' + (i+1));

        }
        
        console.log(this.classes);


  }






}
