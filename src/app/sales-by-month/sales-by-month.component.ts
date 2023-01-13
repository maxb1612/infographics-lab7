import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 320
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: 'Arizona',
        type: "line",
        color: 'red',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196] 
      },
      {
        name: 'California',
        type: "line",
        color: 'blue',
        data: [75, 94, 95, 195, 192, 316, 333, 348, 333, 293, 169, 216] 
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
