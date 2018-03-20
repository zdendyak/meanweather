import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-for-weather',
  templateUrl: './for-weather.component.html',
  styleUrls: ['./for-weather.component.css']
})
export class ForWeatherComponent implements OnChanges {

 
  @Input()
  city: string;
  data: any;

  constructor(private weatherService: WeatherService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.getForecast(changes.city.currentValue);
  }

  private getForecast(cityName) {
    this.weatherService.getForecast(cityName)
      .subscribe(data => {
        this.data = data;
      })
  };


}