import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

import { OneDayForecast, WeatherError } from 'src/types/weather';

@Component({
  selector: 'app-todays-weather',
  templateUrl: './todays-weather.component.html',
  styleUrls: ['./todays-weather.component.scss'],
})
export class TodaysWeatherComponent implements OnInit {

  weatherProp!: OneDayForecast;

  city: string = 'Detroit';

  showWeeksForecast : boolean = false;

  constructor(
    private service: WeatherService,
  ) {}

  ngOnInit(): void {
    this.service.getTodaysWeather(this.city).subscribe((obj) => {
      this.weatherProp = obj;
    });
    
  }

  toggleWeeksForecast () : void{
    this.showWeeksForecast = !this.showWeeksForecast;
  }

  searchLocation (event: any) : void{
    this.service.getTodaysWeather(event.target.value).subscribe((obj) => {
      this.weatherProp = obj;
    },(error: WeatherError) => console.log(error.message));
  }
  


}
