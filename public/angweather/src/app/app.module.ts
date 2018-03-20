import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule   } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdProgressSpinnerModule, MdInputModule, MdButtonModule, MdIconModule, MdCardModule, MdTabsModule} from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';


import { AppComponent } from './app.component';
import 'hammerjs';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { MainComponent } from './component/main/main.component';
import { CurWeatherComponent } from './component/cur-weather/cur-weather.component';
import { ForWeatherComponent } from './component/for-weather/for-weather.component';
import { TwitterComponent } from './component/twitter/twitter.component';
import { FooterComponent } from './component/footer/footer.component';


import { WeatherService } from './services/weather.service';
import { TwitterService } from './services/twitter.service';
import { SharedService } from './services/shared.service';
import { ChartComponent } from './component/chart/chart.component';
import { TimeComponent } from './component/time/time.component';


export function highchartsFactory() {
  const hc = require('highcharts');
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MainComponent,
    CurWeatherComponent,
    ForWeatherComponent,
    TwitterComponent,
    FooterComponent,
    ChartComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    ChartModule//.forRoot(require('highcharts'))
  ],
  providers: [
    WeatherService, 
    TwitterService, 
    SharedService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
