import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editadminprof',
  templateUrl: './editadminprof.component.html',
  styleUrls: ['./editadminprof.component.css']
})
export class EditadminprofComponent implements OnInit {

  form : any = {};
  validsubmit : boolean = false;
  invalidsubmit : boolean =false;

  ImageUrl : string = "assets/img/Studentinfo.jpg";
  FileToUpload : File = null;

  user : any ;
  
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('userName');
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

  }


  onSubmit(dataf : any){




  }

}
