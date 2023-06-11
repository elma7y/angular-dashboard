import { LoggingService } from './../services/logging.service';
import { SettingsService } from './../services/settings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, DoCheck {
  email: string | any;
  active1: boolean;
  active2: boolean;
  active3: boolean;

  quickDraft: boolean;
  yearlyTargets: boolean;
  ticketsStatistics: boolean;
  latestNews: boolean;
  latestTasks: boolean;
  topSearch: boolean;

  actclass: string;
  change: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    mail: new FormControl(this.log.email),
  });

  constructor(private setserv: SettingsService, private log: LoggingService) {
    this.active1 = false;
    this.active2 = false;
    this.active3 = false;

    this.quickDraft = true;
    this.ticketsStatistics = true;
    this.yearlyTargets = true;
    this.latestNews = true;
    this.latestTasks = true;
    this.topSearch = true;

    this.actclass = 'active';
  }
  ngDoCheck() {}

  ngOnInit(): void {}

  activeDrive1() {
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
  }
  activeDrive2() {
    this.active2 = true;
    this.active3 = false;
    this.active1 = false;
  }
  activeDrive3() {
    this.active3 = true;
    this.active2 = false;
    this.active1 = false;
  }
}
