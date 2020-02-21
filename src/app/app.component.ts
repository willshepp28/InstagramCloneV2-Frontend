import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Instagram Clone V2';
  showHeader: boolean;

  constructor(
    private titleService: Title,
    private store: Store<any>
    ) {}

  ngOnInit() {
    this.setTitle("Instagram");
    this.store.select('authentication').subscribe(authentication => {
      this.showHeader = authentication.isAuthenticated;
    });


    console.log(this.showHeader);
  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
