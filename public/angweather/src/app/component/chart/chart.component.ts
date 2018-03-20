import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, OnInit {

  @Input() data: any;

  options: object;

  constructor() { }

  ngOnInit() {
    this.setOptions();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.setOptions();
  }

  private setOptions() {

    let labels = this.data.list
                  .map(d => new Date(d.dt))
                  .map(d => ''+ d.getDate() + '/' + d.getMonth() + ' ' + d.getHours()+ ':'+d.getMinutes());    
    let temps = this.data.list.map(d => d.temp);

    
    this.options = {
      title: {text: 'Forcast Weather Chart'},
      xAxis: {
        categories: labels,
        type: 'datetime'
      },
      series: [{
        name: 'Temperature',
        data: temps,
        tooltip: {
          valueDecimals: 1
        }
      }],
      chart: {
        width: 550,
        height: 400
      },
      accessibility: {
        //pointDateFormat: '%D/%M/%Y'
      }
    }
  };

}
