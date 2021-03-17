import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {DayPilotModule} from "daypilot-pro-angular";
import {HttpClientModule} from "@angular/common/http";
import { DataService } from '../../Service/Adminservice/data.service';
import { AdmincalenderComponent } from './admincalender.component';




@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule
  ],
  declarations: [
    AdmincalenderComponent
  ],
  exports:      [ AdmincalenderComponent ],
  providers:    [ DataService ]
})
export class AdmincalenderModule { }
