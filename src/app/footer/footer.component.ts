import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version = '1.0';
  year = '2018';
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
