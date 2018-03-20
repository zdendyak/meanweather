import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private apiUrl = '';

  constructor(private http: Http) { }

  getCurrentWeather(city: string) {
    return this.http.post(this.apiUrl + '/weather/current', {city: city})
      .map(res => res.json());
  }

  getForecast(city: string) {
    return this.http.post(this.apiUrl + '/weather/forecast', {city: city})
      .map(res => res.json());
  }

}
