import { Component, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
//import { SharedService } from '../../services/shared.service';
//import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cur-weather',
  templateUrl: './cur-weather.component.html',
  styleUrls: ['./cur-weather.component.css']
})
export class CurWeatherComponent implements OnDestroy {

  @Input()
  city: string;

  //subscription: Subscription;
  data: any;

  constructor(
    private weatherServise: WeatherService,
    //private sharedService: SharedService
  ) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getCurrentWeather(changes.city.currentValue);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    //this.subscription.unsubscribe();
  }

  private getCurrentWeather(city) {
    this.weatherServise.getCurrentWeather(city)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
