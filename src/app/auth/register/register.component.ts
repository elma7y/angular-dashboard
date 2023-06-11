import { LoggingService } from './../../services/logging.service';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, DoCheck {
  hide: boolean;
  usererror: string;
  passerror: string;
  emailerror: string;
  userstyle: any;
  passstyle: any;
  emailstyle: any;
  reg: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private log: LoggingService) {
    this.hide = true;
    this.usererror = 'username is required*';
    this.passerror = 'password is required*';
    this.emailerror = 'email is required*';
    this.userstyle = '';
    this.passstyle = '';
    this.emailstyle = '';
  }

  ngDoCheck() {
    if (
      this.reg.controls['username'].touched &&
      this.reg.controls['username'].dirty
    ) {
      this.userstyle = 'red';
      this.usererror = 'username must be at least 10 characters';
      if (this.reg.controls['username'].valid) {
        this.userstyle = 'green';
        this.usererror = 'username is valid';
      }
      if (this.reg.controls['username'].value == '') {
        this.usererror = 'username is required*';
        this.userstyle = 'white';
      }
    }
    if (
      this.reg.controls['password'].touched &&
      this.reg.controls['password'].dirty
    ) {
      this.passerror = ' password must be at least 10 characters';
      this.passstyle = 'red';
      if (this.reg.controls['password'].valid) {
        this.passerror = 'password is valid';
        this.passstyle = 'green';
      }
      if (this.reg.controls['password'].value == '') {
        this.passerror = 'password is required*';
        this.passstyle = 'white';
      }
    }
    if (
      this.reg.controls['email'].touched &&
      this.reg.controls['email'].dirty
    ) {
      this.emailerror = ' email is invalid';
      this.emailstyle = 'red';
      if (this.reg.controls['email'].valid) {
        this.emailerror = 'email is valid';
        this.emailstyle = 'green';
      }
      if (this.reg.controls['email'].value == '') {
        this.emailerror = 'email is required*';
        this.emailstyle = 'white';
      }
    }
  }

  ngOnInit() {}

  getErrorMessage() {
    if (this.reg.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.reg.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  register() {
    this.log.username = this.reg.controls['username'].value;
    this.log.password = this.reg.controls['password'].value;
    this.log.email = this.reg.controls['email'].value;
    this.log.registerUser();
  }
}
