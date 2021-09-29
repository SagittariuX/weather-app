import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneDayForecast } from 'src/types/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'bf0c37c2e58a3c49f98834b1ece160c6';
  cityName: string = 'Detroit';

  constructor(private http: HttpClient) { }

  getTodaysWeather() {
    return this.http.get<OneDayForecast>(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}`,
      {responseType: 'json'}
    )
  }
}
