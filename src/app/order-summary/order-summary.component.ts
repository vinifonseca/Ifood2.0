import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  rated = false;

  constructor() {}

  ngOnInit() {
  }

  rate() {
    this.rated = true;
  }

}
