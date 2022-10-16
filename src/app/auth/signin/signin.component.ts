import { LoggingService } from './../../services/logging.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, DoCheck {
  hide: boolean;
  usererror: string;
  passerror: string;
  userstyle: any;
  passstyle: any;

  log = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private sign: LoggingService) {
    this.hide = true;
    this.usererror = 'username is required*';
    this.passerror = 'password is required*';
    this.userstyle = '';
    this.passstyle = '';
  }
  ngDoCheck() {
    if (
      this.log.controls['username'].touched &&
      this.log.controls['username'].dirty
    ) {
      this.userstyle = 'red';
      this.usererror = 'username must be at least 10 characters';
      if (this.log.controls['username'].valid) {
        this.userstyle = 'green';
        this.usererror = 'username is valid';
      }
      if (this.log.controls['username'].value == '') {
        this.usererror = 'username is required*';
        this.userstyle = 'white';
      }
    }
    if (
      this.log.controls['password'].touched &&
      this.log.controls['password'].dirty
    ) {
      this.passerror = ' password must be at least 10 characters';
      this.passstyle = 'red';
      if (this.log.controls['password'].valid) {
        this.passerror = 'password is valid';
        this.passstyle = 'green';
      }
      if (this.log.controls['password'].value == '') {
        this.passerror = 'password is required*';
        this.passstyle = 'white';
      }
    }
  }

  ngOnInit(): void {}

  login() {
    this.sign.logusername = this.log.controls['username'].value;
    this.sign.logpassword = this.log.controls['password'].value;
    this.sign.loggingUser();
  }
}
