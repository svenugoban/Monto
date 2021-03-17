import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotMonthComponent,
  DayPilotNavigatorComponent
} from "daypilot-pro-angular";
import { DataService } from '../../Service/Adminservice/data.service';


@Component({
  selector: 'app-admincalender',
  templateUrl: './admincalender.component.html',
  styleUrls: ['./admincalender.component.css']
})
export class AdmincalenderComponent implements AfterViewInit {
  @ViewChild("day") day: DayPilotCalendarComponent;
  @ViewChild("week") week: DayPilotCalendarComponent;
  @ViewChild("month") month: DayPilotMonthComponent;
  @ViewChild("navigator") nav: DayPilotNavigatorComponent;

  events: any[] = [];

  date = DayPilot.Date.today();

  configNavigator: any = {
    showMonths: 3,
    cellWidth: 25,
    cellHeight: 25,
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };

  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
  }

  configDay: any = {
  };

  configWeek: any = {
    viewType: "Week",
    onTimeRangeSelected: function (args) {
      DayPilot.Modal.prompt("Create a new event:", "Event ").then(function(modal) {
        var dp = args.control;
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add(new DayPilot.Event({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        }));
      });
    }
  };

  configMonth: any = {

  };
  constructor(private ds: DataService) { 
    this.viewWeek();
  }

  ngAfterViewInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    let from = this.nav.control.visibleStart();
    let to = this.nav.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

  viewDay():void {
    this.configNavigator.selectMode = "Day";
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
  }

  viewWeek():void {
    this.configNavigator.selectMode = "Week";
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
  }

  viewMonth():void {
    this.configNavigator.selectMode = "Month";
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
  }



}
