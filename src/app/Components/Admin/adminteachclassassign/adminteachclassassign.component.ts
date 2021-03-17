import { Component, OnInit } from '@angular/core';
import { Teachdatalist } from '../../Model/Adminmodel/teachdatalist';
import {TeachfindoneService} from '../../Service/Adminservice/teachfindone.service';
import {TeachdatalistService} from '../../Service/Adminservice/teachdatalist.service';
import { ManageclassService } from '../../Service/Adminservice/manageclass.service';
import { Classroom } from '../../Model/Adminmodel/classroom';


@Component({
  selector: 'app-adminteachclassassign',
  templateUrl: './adminteachclassassign.component.html',
  styleUrls: ['./adminteachclassassign.component.css']
})
export class AdminteachclassassignComponent implements OnInit {

  form : any = {};


  teachlist : Teachdatalist[];
  teachobject : Teachdatalist;
  tsearchterm : string;
  teacherid : any;

  validassign : boolean = false;
  invalidassign : boolean = false;
  classlist : Classroom[];

  classcount : any;
  classes : any = [];

  constructor(private teachdatalistservice : TeachdatalistService, private findteacher : TeachfindoneService, private manageclassservice : ManageclassService) { }

  ngOnInit() {

    this.teachdatalistservice.getteachlist().subscribe(
      datab => {
        console.log(datab);
        this.teachlist = datab;
      })

     

        this.classcount = localStorage.getItem('classcount');
        console.log(this.classcount);
        
        for(var i = 0; i < this.classcount;  i++){

          this.classes.push('class' + (i+1));

        }
        
        console.log(this.classes);
        


  }



  OnSubmit(){

    this.teachlist.forEach(teacher => {

      console.log(teacher);

      this.manageclassservice.assignteacher(teacher.teacherusername , teacher.classroom).subscribe(
        datab => {
          console.log(datab);
          this.validassign = true;
          
        })

    })
  }

  issueattendancesheet(){

    this.manageclassservice.issueattendancelist().subscribe(
      datab => {
        console.log(datab);
        alert("Attendance sheet issued successfully");
      })
  }






}
