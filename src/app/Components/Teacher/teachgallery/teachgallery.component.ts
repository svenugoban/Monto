import { Component, OnInit } from '@angular/core';
import { NewsfeeduploadService } from '../../Service/Teacherservice/newsfeedupload.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teachgallery',
  templateUrl: './teachgallery.component.html',
  styleUrls: ['./teachgallery.component.css'],
  providers : [NewsfeeduploadService]
})
export class TeachgalleryComponent implements OnInit {

  form : any = {};
  validsubmit : boolean = false;
  invalidsubmit : boolean =false;


  ImageUrl : string = "/assets/img/gallery1.png";
  FileToUpload : any = File;
  
  
  constructor(private newsfeeduploadservice : NewsfeeduploadService, private router : Router) { }

  ngOnInit() {
  }


  handleFileInput(file : FileList){

     

    this.FileToUpload = file.item(0);
    console.log(this.FileToUpload);

    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload);
  }
  
  

  onSubmit(dataf : any){

    console.log(dataf);
    console.log(this.form.name);
    console.log(dataf.form.description);
    var formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('file',this.FileToUpload);
    formData.append('description',this.form.description);
    console.log(formData);


    this.newsfeeduploadservice.newsfeeduploadbackdata(formData).subscribe(
      datab => {
        console.log(datab);
        alert("Newsfeed added successfully");
        this.router.navigate(['teachgallery']);

      })
  
  }
 
 

}
