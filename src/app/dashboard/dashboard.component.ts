import { LoggingService } from './../services/logging.service';
import { SettingsService } from './../services/settings.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DraftService } from './../services/draft.service';
import { Component, OnInit, DoCheck } from '@angular/core';
export interface PeriodicElement {
  name: string;
  finsihdate: string;
  client: string;
  price: number;
  team: string[];
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'ministry wikibedia',
    finsihdate: '10 may 2022',
    client: 'ministry',
    price: 5300,
    team: [
      'assets/images/team-01.png',
      'assets/images/team-02.png',
      'assets/images/team-03.png',
      'assets/images/team-04.png',
    ],
    status: 'pending',
  },
  {
    name: 'sameh shop',
    finsihdate: '12 oct 2021',
    client: 'samehs company',
    price: 1500,
    team: [
      'assets/images/team-01.png',
      'assets/images/team-02.png',
      'assets/images/team-04.png',
    ],
    status: 'in progress',
  },
  {
    name: 'bouba app',
    finsihdate: '05 sep 2021',
    client: 'bouba',
    price: 800,
    team: ['assets/images/team-02.png', 'assets/images/team-03.png'],
    status: 'completed',
  },
  {
    name: 'ma7y website',
    finsihdate: '25 may 2021',
    client: 'ma7y',
    price: 600,
    team: ['assets/images/team-01.png', 'assets/images/team-02.png'],
    status: 'completed',
  },
  {
    name: 'hello world',
    finsihdate: '4 oct 2021',
    client: 'mr.x',
    price: 600,
    team: ['assets/images/team-01.png', 'assets/images/team-02.png'],
    status: 'rejected',
  },
  {
    name: 'fakebook',
    finsihdate: '1 jan 2022',
    client: 'meta',
    price: 2600,
    team: [
      'assets/images/team-01.png',
      'assets/images/team-02.png',
      'assets/images/team-03.png',
      'assets/images/team-04.png',
      'assets/images/team-05.png',
    ],
    status: 'completed',
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, DoCheck {
  displayedColumns: string[] = [
    'name',
    'finsihdate',
    'client',
    'price',
    'team',
    'status',
  ];
  dataSource = ELEMENT_DATA;
  tables = [0];

  isdeleted1: boolean;
  isdeleted2: boolean;
  isdeleted3: boolean;
  isdeleted4: boolean;
  isdeleted5: boolean;
  deleteClass1: string;
  deleteClass2: string;
  deleteClass3: string;
  deleteClass4: string;
  deleteClass5: string;
  deleteStyle1: string;
  deleteStyle2: string;
  deleteStyle3: string;
  deleteStyle4: string;
  deleteStyle5: string;
  completedStyle: string;
  inprogressStyle: string;
  pendingStyle: string;
  rejectedStyle: string;

  draftForm: FormGroup = new FormGroup({
    yourTitle: new FormControl('', [Validators.required]),
    yourThoughts: new FormControl('', [Validators.required]),
  });

  showquick: boolean;

  usernameprofile: any;

  constructor(
    private mydraft: DraftService,
    private setserv: SettingsService,
    private loging: LoggingService
  ) {
    this.deleteClass1 = '';
    this.deleteClass2 = '';
    this.deleteClass3 = '';
    this.deleteClass4 = '';
    this.deleteClass5 = '';
    this.isdeleted1 = true;
    this.isdeleted2 = true;
    this.isdeleted3 = true;
    this.isdeleted4 = true;
    this.isdeleted5 = true;
    this.deleteStyle1 = 'green';
    this.deleteStyle2 = 'green';
    this.deleteStyle3 = 'green';
    this.deleteStyle4 = 'green';
    this.deleteStyle5 = 'green';
    this.completedStyle = 'btn-success';
    this.inprogressStyle = 'btn-primary';
    this.pendingStyle = 'btn-warning';
    this.rejectedStyle = 'btn-danger';

    this.showquick = true;
  }
  ngDoCheck() {
    if (document.getElementsByName('pending')) {
      document.getElementsByName('pending').forEach((ele) => {
        ele.classList.add(this.pendingStyle);
      });
    }
    if (document.getElementsByName('rejected')) {
      document.getElementsByName('rejected').forEach((ele) => {
        ele.classList.add(this.rejectedStyle);
      });
    }
    if (document.getElementsByName('completed')) {
      document.getElementsByName('completed').forEach((ele) => {
        ele.classList.add(this.completedStyle);
      });
    }
    if (document.getElementsByName('in progress')) {
      document.getElementsByName('in progress').forEach((ele) => {
        ele.classList.add(this.inprogressStyle);
      });
    }
    this.showquick = this.setserv.quickDraft;
  }

  ngOnInit() {
    this.usernameprofile = this.loging.logusername;
  }

  deleteTask1() {
    if (this.isdeleted1) {
      this.deleteStyle1 = 'red';
      this.deleteClass1 = 'delete';
      this.isdeleted1 = false;
    } else {
      this.deleteStyle1 = 'green';
      this.deleteClass1 = '';
      this.isdeleted1 = true;
    }
  }
  deleteTask2() {
    if (this.isdeleted2) {
      this.deleteStyle2 = 'red';
      this.deleteClass2 = 'delete';
      this.isdeleted2 = false;
    } else {
      this.deleteStyle2 = 'green';
      this.deleteClass2 = '';
      this.isdeleted2 = true;
    }
  }
  deleteTask3() {
    if (this.isdeleted3) {
      this.deleteStyle3 = 'red';
      this.deleteClass3 = 'delete';
      this.isdeleted3 = false;
    } else {
      this.deleteStyle3 = 'green';
      this.deleteClass3 = '';
      this.isdeleted3 = true;
    }
  }
  deleteTask4() {
    if (this.isdeleted4) {
      this.deleteStyle4 = 'red';
      this.deleteClass4 = 'delete';
      this.isdeleted4 = false;
    } else {
      this.deleteStyle4 = 'green';
      this.deleteClass4 = '';
      this.isdeleted4 = true;
    }
  }
  deleteTask5() {
    if (this.isdeleted5) {
      this.deleteStyle5 = 'red';
      this.deleteClass5 = 'delete';
      this.isdeleted5 = false;
    } else {
      this.deleteStyle5 = 'green';
      this.deleteClass5 = '';
      this.isdeleted5 = true;
    }
  }
  draftSubmit() {
    this.mydraft.userTestStatus.title =
      this.draftForm.controls['yourTitle'].value;
    this.mydraft.userTestStatus.thoughts =
      this.draftForm.controls['yourThoughts'].value;
    this.mydraft.dataArray();
  }
}
