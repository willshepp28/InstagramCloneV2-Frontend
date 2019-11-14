import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-ig-form',
  templateUrl: './ig-form.component.html',
  styleUrls: ['./ig-form.component.css']
})
export class IgFormComponent implements OnInit {
  route: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.route = this.router.url;

  }



}
