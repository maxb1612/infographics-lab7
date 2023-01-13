import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 320
    },
    title: {
      text: 'Month wise sales'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Electronics',
            y: 41.0,
            color: 'red'
          },
          {
            name: 'Clothes',
            y: 59.0,
            color: 'blue'
          },
        ]
      }
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

}
