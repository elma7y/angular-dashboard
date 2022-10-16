import { LoggingService } from './../services/logging.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  usernameprofile: any;
  emailprofile: any;
  constructor(private login: LoggingService) {}

  ngOnInit() {
    this.usernameprofile = this.login.logusername;
    this.emailprofile = this.login.email;
  }
}
