import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Link } from './link';
import config from './config.json';

@Component({
  selector: 'tcs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  links: Link[];
  now: Date;
  tickSize: number;
  spacerWidth: number;
  secondsBarWidth: number;

  constructor() {
    this.loadlinks();
  }

  ngOnInit() {
    setInterval(() => {this.getDate(); }, 500);
  }

  ngAfterViewInit(): void {
    // Hack - find a better way!
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  loadlinks() {
    this.links = config.links;
  }

  getDate() {
    this.now = new Date();

    const width = document.getElementById('clock').clientWidth;
    const secondWidth = Math.floor(width / 60);
    const spacer = this.now.getSeconds() * secondWidth;

    this.secondsBarWidth = secondWidth;
    this.spacerWidth = spacer;
    this.tickSize = secondWidth * 5;
  }
}
