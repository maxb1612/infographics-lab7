import { Component, OnInit } from '@angular/core';
import { faBagShopping, faCheckCircle, faBoxes, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.scss']
})
export class PlatesComponent implements OnInit {

  faBag=faBagShopping;
  faCheck=faCheckCircle;
  faBoxes=faBoxes;
  faMoneyBillTrendUp=faMoneyBillTrendUp;

  constructor() { }

  ngOnInit(): void {
  }

}
