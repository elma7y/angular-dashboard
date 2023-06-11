import { Injectable, DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService implements DoCheck {
  quickDraft: boolean;
  yearlyTargets: boolean;
  ticketsStatistics: boolean;
  latestNews: boolean;
  latestTasks: boolean;
  topSearch: boolean;

  constructor() {
    this.quickDraft = true;
    this.ticketsStatistics = true;
    this.yearlyTargets = true;
    this.latestNews = true;
    this.latestTasks = true;
    this.topSearch = true;
  }
  ngDoCheck() {}
}
