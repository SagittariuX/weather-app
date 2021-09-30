import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'src/types/weather';

@Component({
  selector: 'app-weeks-weather',
  templateUrl: './weeks-weather.component.html',
  styleUrls: ['./weeks-weather.component.scss']
})
export class WeeksWeatherComponent implements OnInit {

  @Input() forecast!: DailyForecast[];

  constructor() { }

  ngOnInit(): void {
  }

}
