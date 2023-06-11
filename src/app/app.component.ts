import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck, OnInit {
  ishome: boolean;
  showside: boolean;
  showclass: string;
  mode: any;
  windowScrolled = false;
  constructor(private route: Router) {
    this.ishome = false;
    this.showside = false;
    this.showclass = '';
    this.mode = 'side';
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  ngDoCheck(): void {
    const currentroute = this.route.url;
    if (currentroute == '/signin') {
      this.ishome = false;
    } else if (currentroute == '/register') {
      this.ishome = false;
    } else if (currentroute == '/') {
      this.ishome = false;
    } else if (currentroute == '/register/signin') {
      this.ishome = false;
    } else {
      this.ishome = true;
    }
  }

  toggleincome(toggledata: any) {
    this.mode = toggledata.mode;
    this.showclass = toggledata.showclass;
    this.showside = toggledata.showside;
  }

  scrolling() {
    document.getElementById('uparrow')?.scrollTop;
    console.log('die');
  }
}
