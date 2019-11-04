import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-container-dahsboard',
  templateUrl: './container-dahsboard.component.html',
  styleUrls: ['./container-dahsboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerDahsboardComponent implements OnInit {
  title = 'sffront';
  constructor(private webSocketService : WebsocketService) {

  }

  chartTemperature = [];
  chartHumidity = [];
  counterHum=0;
  counterTemp=0;

  ngOnInit(): void {
   
    this.chartTemperature = new Chart('temperature', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Temperatura'
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
         /* xAxes: [{
            type: 'time',
            time: {
                unit: 'second'
            },
            distribution: 'linear'
        }]*/
        }
      },
      data: {
        datasets: [{
            label: 'Mediciones',
            backgroundColor: 'rgba(51,102,255,0.6)',
            borderColor: 'blue',
            fill: true,
            borderWidth: 1
          }],
      }
    });

    this.chartHumidity = new Chart('humidity', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Humedad'
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
          /*xAxes: [{
            type: 'time',
            time: {
                unit: 'second'
            },
            distribution: 'linear'
        }]*/
        }
      },
      data: {
        datasets: [{
            label: 'Mediciones',
            backgroundColor: 'rgba(22, 78, 22, 0.60)',
            borderColor: 'black',
            fill: true,
            borderWidth: 1
          }],
      }
    });

    this.webSocketService.listen('mqtt:temp').subscribe((data) => {
      console.log("temperatura: ", data['value']);
      this.updateTemperatureChartData(this.chartTemperature, data['value']);
    })

    this.webSocketService.listen('mqtt:hum').subscribe((data) => {
      console.log("humedad: ", data['value']);
      this.updateHumidityChartData(this.chartHumidity, data['value']);
    })
  }

  updateTemperatureChartData(chart, sensor_data) {
    chart.data.labels.push(moment().format("hh:mm:ss a"));
       chart.data.datasets.forEach(dataset => {
            //dataset.backgroundColor ='rgba(229, 78, 22, 0.60)';
            dataset.data.push(sensor_data);
        });    
        this.counterTemp++
        if (this.counterTemp > 13){
            chart.data.labels.shift(this.counterTemp);
            chart.data.datasets.forEach(dataset => {
                //dataset.backgroundColor ='rgba(22, 7, 22, 0.60)';
                
                dataset.data.shift(sensor_data);
            });    
        }
    chart.update();
  }

  updateHumidityChartData(chart, sensor_data) {
    chart.data.labels.push(moment().format("hh:mm:ss a"));
    chart.data.datasets.forEach(dataset => {
         dataset.data.push(sensor_data);
     });    
     this.counterHum++
     if (this.counterHum > 13){
         chart.data.labels.shift(this.counterHum);
         chart.data.datasets.forEach(dataset => {
             dataset.data.shift(sensor_data);
         });    
     }
 chart.update();
  }
}
