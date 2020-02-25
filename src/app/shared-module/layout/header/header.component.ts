import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instagram-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = localStorage.getItem('name');

  constructor() { }

  ngOnInit() {
  }

}
