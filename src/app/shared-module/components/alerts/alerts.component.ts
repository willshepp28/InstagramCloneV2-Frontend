import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/store/app.states';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'instagram-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  message$: string;
  isError$: boolean;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select('alert').subscribe(alert => {
      this.isError$ = alert.status === "error";
      this.message$ = alert.message;
    });
  }

}
