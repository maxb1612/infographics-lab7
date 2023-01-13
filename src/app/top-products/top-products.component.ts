import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'column',
      height: 400,
      width: 1200,
      backgroundColor: '#f2f2f2'
    },
    title: {
      align: 'left',
      text: 'Найпопулярніші товари'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Продані одиниці товару'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },

    series: [
      {
        name: 'Продано одиниць',
        type: 'column',
        colorByPoint: true,
        data: [
          {
            name: 'iPhone',
            y: 15000
          },
          {
            name: 'Samsung Galaxy',
            y: 10500,
          },
          {
            name: 'MacBook',
            y: 8250
          },
          {
            name: 'Dell XPS',
            y: 7500
          },
          {
            name: 'Sony PlayStation',
            y: 6750
          },
          {
            name: 'Xbox Series X',
            y: 5500
          },
          {
            name: 'Nintendo Switch',
            y: 4500
          },
          {
            name: 'GoPro HERO9',
            y: 3750
          },
          {
            name: 'DJI Mavic Air 2',
            y: 2500
          },
          {
            name: 'Canon EOS R5',
            y: 1500
          }
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

}
