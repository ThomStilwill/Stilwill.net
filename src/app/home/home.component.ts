import { Component, OnInit } from '@angular/core';
import { Link } from './link';
import config from './config.json';

@Component({
  selector: 'tcs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Link[];
  now: Date;
  tickSize: number;
  spacerWidth: number;
  secondsBarWidth: number;

  constructor() {
    this.loadlinks();
  }

  ngOnInit() {
    setInterval(()=> {this.getDate(); },500); 
  }

  loadlinks() {
    this.links = config.links;
  }
  
  getDate(){
    this.now = new Date();

    let width = document.getElementById('clock').clientWidth;

    let secondWidth = Math.floor(width / 60);
    
    let spacer = this.now.getSeconds() * secondWidth;

    this.secondsBarWidth = secondWidth;
    this.spacerWidth = spacer;
    this.tickSize = secondWidth * 2;
  }
}
