import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  username: any;
  password: any;
  logusername: any;
  logpassword: any;
  email: any;
  constructor(private route: Router) {
    this.username = '';
    this.password = '';
  }

  registerUser() {
    if (localStorage.getItem(this.username)) {
      Swal.fire({
        title: 'Oops!',
        text: 'UserName Is Already Registered Please try Another UserName',
        icon: 'error',
        confirmButtonText: 'Cool',
        background: '#555',
        color: 'white',
        confirmButtonColor: '#fd7e14',
      });
    } else {
      localStorage.setItem(this.username, this.username);
      localStorage.setItem(this.password, this.password);
      localStorage.setItem(this.email, 'email');
      this.route.navigate(['signin']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        background: '#555',
        color: 'white',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'you registered successfully',
      });
    }
  }

  loggingUser() {
    if (
      (this.logusername = localStorage.getItem(this.logusername)) &&
      (this.logpassword = localStorage.getItem(this.logpassword))
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        background: '#555',
        color: 'white',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });
      this.route.navigate(['dashboard']);
      localStorage.setItem('success', 'true');
    } else {
      this.route.navigate(['signin']);
      Swal.fire({
        title: 'Error!',
        text: 'Unregisterd User Please Try Again',
        icon: 'error',
        confirmButtonText: 'Cool',
        background: '#555',
        color: 'white',
        confirmButtonColor: '#fd7e14',
      });
    }
  }
  logout() {
    Swal.fire({
      title: 'Are You Sure You Want To Logout ?',
      icon: 'question',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> YES!',
      confirmButtonColor: '#fd7e14',
      cancelButtonColor: '#f44336',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> NO',
      cancelButtonAriaLabel: 'Thumbs down',
      background: '#555',
      color: 'white',
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['/signin']);
        localStorage.removeItem('success');
      }
    });
  }
}
