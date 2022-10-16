import { DraftService } from './../services/draft.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss'],
})
export class DraftsComponent implements OnInit {
  title: string[];
  thoughts: string[];

  constructor(private drafts: DraftService) {
    this.title = drafts.draftArraytitle;
    this.thoughts = drafts.draftArraythoughts;
  }

  ngOnInit(): void {}
}
