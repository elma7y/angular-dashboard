import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...404',
      text: 'page not found!',
    });
    this.route.navigate(['signin']);
    localStorage.removeItem('success');
  }
}
