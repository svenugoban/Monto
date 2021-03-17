import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdmincalenderModule } from './Components/Admin/admincalender/admincalender.module';



import 'bootstrap/dist/js/bootstrap.bundle';
import { HomeComponent } from './Components/Front/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TeachtopComponent } from './Components/Teacher/teachtop/teachtop.component';
import { TeachstudlistComponent } from './Components/Teacher/teachstudlist/teachstudlist.component';
import { TeachgalleryComponent } from './Components/Teacher/teachgallery/teachgallery.component';
import { TeachcheckComponent } from './Components/Teacher/teachcheck/teachcheck.component';
import { TeachprofileComponent } from './Components/Teacher/Teacherprof/teachprofile/teachprofile.component';
import { TeachmessageComponent } from './Components/Teacher/teachmessage/teachmessage.component';
import { ParenttopComponent } from './Components/Parent/parenttop/parenttop.component';
import { ParentnewsfeedComponent } from './Components/Parent/parentnewsfeed/parentnewsfeed.component';
import { ParentnotificationComponent } from './Components/Parent/parentnotification/parentnotification.component';
import { ParentmessagesComponent } from './Components/Parent/parentmessages/parentmessages.component';
import { ParentcalenderComponent } from './Components/Parent/parentcalender/parentcalender.component';
import { CommonModule } from '@angular/common';
import { ParentprofileComponent } from './Components/Parent/Parentprof/parentprofile/parentprofile.component';
import { EditparentprofileComponent } from './Components/Parent/Parentprof/editparentprofile/editparentprofile.component';
import { ConfirmEqualValidatorDirective } from './Components/Validator/confirm-equal-validator.directive';
import { AuthGuard } from './Components/auth/auth.guard';
import { ForbiddenerrorComponent } from './Components/forbiddenerror/forbiddenerror.component';
import { HeaderComponent } from './Components/Front/header/header.component';
import { TeachregstudentComponent } from './Components/Teacher/teachregstudent/teachregstudent.component';
import { FooteralComponent } from './Components/footeral/footeral.component';
import { FooterblComponent } from './Components/footerbl/footerbl.component';
import { TeachmedsformComponent } from './Components/Teacher/teachmedsform/teachmedsform.component';
import { NewsfeedService } from './Components/Service/Parentservice/newsfeed.service';


import { AdmintopComponent } from './Components/Admin/admintop/admintop.component';
import { AdminstudprofComponent } from './Components/Admin/adminstudprof/adminstudprof.component';
import { AdmincalenderComponent } from './Components/Admin/admincalender/admincalender.component';
import { AdmininventoryComponent } from './Components/Admin/admininventory/admininventory.component';
import { AdminteachprofComponent } from './Components/Admin/adminteachprof/adminteachprof.component';
import { StudentfilterPipe } from './Components/Pipe/ATcommon/studentfilter.pipe';
import { AdminregteacherComponent } from './Components/Admin/adminregteacher/adminregteacher.component';
import { AdminteachsignupComponent } from './Components/Admin/adminteachsignup/adminteachsignup.component';
import { TeacherfilterPipe } from './Components/Pipe/Admin/teacherfilter.pipe';
import { NewsfeeduploadService } from './Components/Service/Teacherservice/newsfeedupload.service';
import { EditteachprofComponent } from './Components/Teacher/Teacherprof/editteachprof/editteachprof.component';
import { EditadminprofComponent } from './Components/Admin/Adminprofile/editadminprof/editadminprof.component';
import { AdminprofComponent } from './Components/Admin/Adminprofile/adminprof/adminprof.component';
import { AdminteachclassassignComponent } from './Components/Admin/adminteachclassassign/adminteachclassassign.component';
import { StudentclassesComponent } from './Components/Admin/studentclasses/studentclasses.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TeachtopComponent,
    TeachstudlistComponent,
    TeachgalleryComponent,
    TeachcheckComponent,
    TeachprofileComponent,
    TeachmessageComponent,
    ParenttopComponent,
    ParentnewsfeedComponent,
    ParentnotificationComponent,
    ParentmessagesComponent,
    ParentcalenderComponent,
    ParentprofileComponent,
    EditparentprofileComponent,
    ConfirmEqualValidatorDirective,
    ForbiddenerrorComponent,
    HeaderComponent,
    TeachregstudentComponent,
    FooteralComponent,
    FooterblComponent,
    TeachmedsformComponent,
    AdminstudprofComponent,
    // AdmincalenderComponent,
    AdmininventoryComponent,
    AdmintopComponent,
    AdminteachprofComponent,
    AdminregteacherComponent,
    AdminteachsignupComponent,
    StudentfilterPipe,
    TeacherfilterPipe,
    EditteachprofComponent,
    EditadminprofComponent,
    AdminprofComponent,
    AdminteachclassassignComponent,
    StudentclassesComponent,
    
    
    
    
    
    
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    AdmincalenderModule,
    BsDatepickerModule.forRoot()
    

    
    
  ],
  providers: [AuthGuard, NewsfeedService,NewsfeeduploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
