import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../../../core/store/app.states";


@Component({
  selector: 'instagram-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private store: Store<AppState>;

  constructor() { }

  ngOnInit() {
  }

}
