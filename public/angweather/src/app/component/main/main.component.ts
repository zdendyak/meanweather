import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { SharedService } from '../../services/shared.service';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  data: any;
  currWeather: any;
  forecast: any;
  city: string;


  constructor(
              //private sharedService: SharedService,
              private weatherService: WeatherService
              ) { }

  ngOnInit() {
    let city = JSON.parse(window.localStorage.getItem("city"));
    let time = new Date().getTime();
    if (city && (city.expires > time)) {
      this.city = city.cityName;
    } else {
      this.city = undefined;
      localStorage.removeItem("city");
    }
  }

  onSearchEvent(event) {
    this.city = event;
    //this.sharedService.announceCity(event);
    let city = {
      cityName: event,
      expires: new Date().getTime() + 5 * 60 * 1000 // 5 minutes
    }
    window.localStorage.setItem("city", JSON.stringify(city));
  };

}
