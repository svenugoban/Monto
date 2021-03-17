import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/Front/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TeachstudlistComponent } from './Components/Teacher/teachstudlist/teachstudlist.component';
import { TeachcheckComponent } from './Components/Teacher/teachcheck/teachcheck.component';
import { TeachgalleryComponent } from './Components/Teacher/teachgallery/teachgallery.component';
import { TeachprofileComponent } from './Components/Teacher/Teacherprof/teachprofile/teachprofile.component';
import { TeachmessageComponent } from './Components/Teacher/teachmessage/teachmessage.component';
import { ParentnewsfeedComponent } from './Components/Parent/parentnewsfeed/parentnewsfeed.component';
import { ParentnotificationComponent } from './Components/Parent/parentnotification/parentnotification.component';
import { ParentmessagesComponent } from './Components/Parent/parentmessages/parentmessages.component';
import { ParentcalenderComponent } from './Components/Parent/parentcalender/parentcalender.component';
import { ParentprofileComponent } from './Components/Parent/Parentprof/parentprofile/parentprofile.component';
import { EditparentprofileComponent } from './Components/Parent/Parentprof/editparentprofile/editparentprofile.component';
import { AuthGuard } from './Components/auth/auth.guard';
import { ForbiddenerrorComponent } from './Components/forbiddenerror/forbiddenerror.component';

import { TeachregstudentComponent } from './Components/Teacher/teachregstudent/teachregstudent.component';
import { TeachmedsformComponent } from './Components/Teacher/teachmedsform/teachmedsform.component';
import { AdminstudprofComponent } from './Components/Admin/adminstudprof/adminstudprof.component';
import { AdminteachprofComponent } from './Components/Admin/adminteachprof/adminteachprof.component';
import { AdmininventoryComponent } from './Components/Admin/admininventory/admininventory.component';
import { AdmincalenderComponent } from './Components/Admin/admincalender/admincalender.component';
import { AdminregteacherComponent } from './Components/Admin/adminregteacher/adminregteacher.component';
import { AdminteachsignupComponent } from './Components/Admin/adminteachsignup/adminteachsignup.component';
import { EditteachprofComponent } from './Components/Teacher/Teacherprof/editteachprof/editteachprof.component';
import { AdminprofComponent } from './Components/Admin/Adminprofile/adminprof/adminprof.component';
import { EditadminprofComponent } from './Components/Admin/Adminprofile/editadminprof/editadminprof.component';
import { AdminteachclassassignComponent } from './Components/Admin/adminteachclassassign/adminteachclassassign.component';
import { StudentclassesComponent } from './Components/Admin/studentclasses/studentclasses.component';












const routes: Routes = [
{
  path:'',
  component:HomeComponent

},
{
  path : 'signup',
  component : SignupComponent
},

{
  path:'login',
  component:LoginComponent

},


{
  path : 'adminstudprof',
  component : AdminstudprofComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
},
{
  path : 'adminteachprof',
  component : AdminteachprofComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
},
{
  path : 'adminclassassign',
  component : AdminteachclassassignComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
},
{
  path : 'admincalender',
  component : AdmincalenderComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
},
{
  path : "adminregstudent",
  component : AdminregteacherComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
},
{
  path : "adminteachsignup",
  component : AdminteachsignupComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
  
},
{
  path : "adminstudclass",
  component : StudentclassesComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
  
},

{
  path : "adminprof",
  component : AdminprofComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
  
},
{
  path : "editadminprof",
  component : EditadminprofComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_ADMIN']}
  
},




{
  path:'teachstudlist',
  component:TeachstudlistComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachcheck',
  component:TeachcheckComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachgallery',
  component:TeachgalleryComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachprofile',
  component:TeachprofileComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path :"editteachprof",
  component:EditteachprofComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachmessage',
  component:TeachmessageComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachregstudent',
  component:TeachregstudentComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},
{
  path:'teachmedsform',
  component:TeachmedsformComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_TEACHER']}
},



{
  path:'parentnewsfeed',
  component:ParentnewsfeedComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
  path:'parentnotification',
  component:ParentnotificationComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
  path:'parentmessages',
  component:ParentmessagesComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
  path:'parentcalender',
  component:ParentcalenderComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
  path:'parentprofile',
  component:ParentprofileComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
  path:'editparentprofile',
  component:EditparentprofileComponent,
  canActivate : [AuthGuard],
  data : {permittedRoles:['ROLE_PARENT']}
},
{
path:'forbidden',
component : ForbiddenerrorComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
