import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  joinFree: boolean;
  joinBasic: boolean;
  joinPremium: boolean;
  constructor() {
    this.joinFree = false;
    this.joinBasic = false;
    this.joinPremium = true;
  }

  ngOnInit(): void {}

  joinedFree() {
    this.joinFree = true;
    this.joinBasic = false;
    this.joinPremium = false;
  }
  joinedBasic() {
    this.joinBasic = true;
    this.joinFree = false;
    this.joinPremium = false;
  }
  joinedPremium() {
    this.joinPremium = true;
    this.joinBasic = false;
    this.joinFree = false;
  }
}
