import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

import { OneDayForecast,DailyForecast , WeatherError } from 'src/types/weather';

@Component({
  selector: 'app-todays-weather',
  templateUrl: './todays-weather.component.html',
  styleUrls: ['./todays-weather.component.scss'],
})
export class TodaysWeatherComponent implements OnInit {

  todaysForecast!: OneDayForecast;
  weeksForecast!: DailyForecast[];

  city: string = 'Detroit';

  showWeeksForecast : boolean = true;

  constructor(
    private service: WeatherService,
  ) {}

  ngOnInit(): void {
    this.service.getTodaysWeather(this.city).subscribe((obj) => {
      this.todaysForecast = obj;

      this.service.getWeeksWeather(this.todaysForecast.coord.lat, this.todaysForecast.coord.lon).subscribe(obj => {
        this.weeksForecast = obj.daily;
        console.log(this.weeksForecast);
      })

    });
  }

  toggleWeeksForecast () : void{
    this.showWeeksForecast = !this.showWeeksForecast;
  }

  searchLocation (event: any) : void{
    this.service.getTodaysWeather(event.target.value).subscribe((obj) => {
      this.todaysForecast = obj;
      
      this.service.getWeeksWeather(this.todaysForecast.coord.lat, this.todaysForecast.coord.lon).subscribe(obj => {
        this.weeksForecast = obj.daily;
      })

    },(error: WeatherError) => console.log(error.message));
  }
  


}
