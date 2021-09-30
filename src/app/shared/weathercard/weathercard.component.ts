import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'src/types/weather';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnInit {

  @Input() forecast!: DailyForecast;

  constructor() { }

  ngOnInit(): void {
  }

}
