import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneDayForecast } from 'src/types/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'bf0c37c2e58a3c49f98834b1ece160c6';

  constructor(private http: HttpClient) { }


  // https://openweathermap.org/current
  getTodaysWeather(search: string) {
    return this.http.get<OneDayForecast>(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${this.apiKey}`,
      {responseType: 'json'}
    )
  }

  // https://openweathermap.org/api/one-call-api
  getWeeksWeather(lat: number, lon: number){
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}`,
      {responseType: 'json'}
    )
  }

  // https://openweathermap.org/weather-conditions#How-to-get-icon-URL
}
