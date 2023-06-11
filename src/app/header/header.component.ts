import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggledata = new EventEmitter<{
    showside: boolean;
    showclass: string;
    mode: any;
  }>();

  constructor(private log: LoggingService) {}

  showside: boolean = true;
  showclass: string = '';
  mode: any;

  showsidebar() {
    if (this.showside == true) {
      this.showclass = 'display:none !important';
      this.showside = false;
      this.mode = 'side';
      if (window.innerWidth < 576) {
        this.showclass = 'display:block !important';
        this.mode = 'side';
      }
    } else {
      this.showclass = 'display:block !important';
      this.showside = true;
      if (window.innerWidth < 576) {
        this.showclass = 'display:none !important';
      }
    }
  }

  onToggle() {
    this.showsidebar();
    this.toggledata.emit({
      showside: this.showside,
      showclass: this.showclass,
      mode: this.mode,
    });
  }
  logout() {
    this.log.logout();
  }
}
