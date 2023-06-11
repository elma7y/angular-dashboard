import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DraftService {
  userTestStatus: { title: string; thoughts: string } = {
    title: '',
    thoughts: '',
  };
  draftArraytitle: string[];
  draftArraythoughts: string[];
  constructor() {
    this.draftArraytitle = [];
    this.draftArraythoughts = [];
  }

  dataArray() {
    this.draftArraytitle.push(this.userTestStatus.title);
    this.draftArraythoughts.push(this.userTestStatus.thoughts);
  }
}
// interface Details {
//   title: string;
//   thoughts: string;
// }

// let test1: Details = {
//   title: '',
//   thoughts: '',
// };

// let test2: Details = {
//   title: '',
//   thoughts: '',
// };

// let test3: Details = {
//   title: '',
//   thoughts: '',
// };

// let detail: Details[] = [];
