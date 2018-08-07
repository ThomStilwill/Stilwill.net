import { Component, OnInit } from '@angular/core';
import { Link } from './link';
import * as config from './config.json';

@Component({
  selector: 'tcs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Array<Link> = new Array<Link>();
  now: Date;

  constructor() {
    this.loadlinks();
    this.now = new Date();
  }

  ngOnInit() {
  }

  loadlinks() {
    this.links.push(new Link('Angular', 'http://angular.io'));
    this.links.push(new Link('Scotch.io', 'http://scotch.io'));
    this.links.push(new Link('Bootstrap', ''));
  }

}
