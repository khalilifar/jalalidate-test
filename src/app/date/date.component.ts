import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  dateObject = moment('1395-11-22', 'jYYYY,jMM,jDD'); // this causes below error
  // ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'calSystem' of undefined

  // dateObject: any;
  constructor() {}

  ngOnInit(): void {}
}
