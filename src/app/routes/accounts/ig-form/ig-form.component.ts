import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.states';
import { Observable } from 'rxjs';
import { Alert } from "../../../models/alert/alert";

@Component({
  selector: 'app-ig-form',
  templateUrl: './ig-form.component.html',
  styleUrls: ['./ig-form.component.css']
})
export class IgFormComponent implements OnInit {
  route: string;
  showAlert$: any;

  constructor(
    private router: Router,
    private store: Store<any>
  ) {

  }

  ngOnInit() {
    this.store.select('alert').subscribe(alert => {
      this.showAlert$ = alert;
    });

    this.route = this.router.url;
  }



}
