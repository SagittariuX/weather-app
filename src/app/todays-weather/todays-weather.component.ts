import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { OneDayForecast } from 'src/types/weather';

@Component({
  selector: 'app-todays-weather',
  templateUrl: './todays-weather.component.html',
  styleUrls: ['./todays-weather.component.scss'],
})
export class TodaysWeatherComponent implements OnInit {

  weatherProp!: OneDayForecast;

  constructor(
    private service: WeatherService,
  ) {}

  ngOnInit(): void {
    this.service.getTodaysWeather().subscribe((obj) => {
      this.weatherProp = obj;
      this.weatherProp
      console.log(this.weatherProp);
    });
  }
}
