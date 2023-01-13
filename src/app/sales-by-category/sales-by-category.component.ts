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
      height: 320,
      backgroundColor: '#f2f2f2'
    },
    title: {
      text: 'Найпопулярніші категорії'
    },
    series: [
      {
        name: 'Продано одиниць',
        type: 'pie',
        data: [
          {
            name: 'Смартфони',
            y: 25500,
            color: '#ff0000'
          },
          {
            name: 'Ноутбуки',
            y: 15750,
            color: '#0000ff'
          },
          {
            name: 'Відеокамери',
            y: 17500,
            color: '#00ff00'
          },
          {
            name: 'Ігрові консолі',
            y: 18500,
            color: '#ffa500'
          },
          {
            name: 'Квадрокоптери',
            y: 12500,
            color: '#800080'
          }
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
