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
      height: 320,
      backgroundColor: '#f2f2f2'
    },
    title: {
      text: 'Продажі за місяць'
    },
    xAxis: {
      categories: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
      ]
    },
    yAxis: {
      title: {
        text: 'Тисячі ГРН.'
      }
    },
    series: [
      {
        name: 'Київ',
        type: "line",
        color: 'red',
        data: [80, 75, 90, 130, 160, 180, 210, 240, 220, 190, 150, 200]
      },
      {
        name: 'Дніпро',
        type: "line",
        color: 'blue',
        data: [100, 95, 110, 150, 180, 200, 230, 260, 240, 210, 170, 220]
      },
      {
        name: 'Львів',
        type: "line",
        color: 'green',
        data: [60, 65, 80, 110, 140, 160, 190, 220, 200, 180, 150, 180]
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
