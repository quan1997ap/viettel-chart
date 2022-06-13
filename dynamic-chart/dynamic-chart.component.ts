import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})

export class DynamicChartComponent implements OnInit {
  graph = {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
        name: 'Weekend Rides1',
        marker: {color: 'red'}
      },
      {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter',
        name: 'Week Day Rides',
      },
    ],
    layout: {
      responsive: true,
      title: { text: 'July 2019' },
      xaxis: { 
        title: { text: "Hour of the day" },
      },
      yaxis: {
        title: { text: "Rides" },
      },
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
