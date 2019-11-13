import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Instagram Clone V2';
  constructor(private titleService: Title){}

  ngOnInit() {
    this.setTitle("Instagram");
  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
