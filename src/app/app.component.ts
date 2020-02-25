import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Instagram Clone V2';
  showHeader: boolean;

  constructor(
    private titleService: Title,
    private store: Store<any>
    ) {}

  ngOnInit() {
    this.setTitle("Instagram");


    if (!JSON.parse(localStorage.getItem('isAuthenticated'))) {
      this.store.select('authentication').subscribe(authentication => {
        localStorage.setItem('isAuthenticated', JSON.stringify(authentication.isAuthenticated))
        this.showHeader = JSON.parse(localStorage.getItem('isAuthenticated'));
      });
    } else {
      this.showHeader = JSON.parse(localStorage.getItem('isAuthenticated'))
    }

  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  public greet(greeting: string) {
    console.log(greeting);
  };

  ngOnDestroy() {
    this.store.select('authentication').subscribe(authentication => {
      this.showHeader = authentication.isAuthenticated;
    });
  }

}
