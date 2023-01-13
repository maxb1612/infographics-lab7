import { Component, OnInit } from '@angular/core';
import { faLocation, faShop, faBoxes, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.scss']
})
export class PlatesComponent implements OnInit {

  faLocation=faLocation;
  faShop=faShop;
  faBoxes=faBoxes;
  faMoneyBillTrendUp=faMoneyBillTrendUp;

  constructor() { }

  ngOnInit(): void {
  }

}
