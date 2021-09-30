import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {
  KelvinToCelciusPipe,
  KelvinToFahrenheitPipe,
} from 'src/pipes/weather.pipe';

import { TodaysWeatherComponent } from './todays-weather/todays-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ChiplistComponent } from './shared/chiplist/chiplist.component';
import { WeeksWeatherComponent } from './weeks-weather/weeks-weather.component';
import { WeathercardComponent } from './shared/weathercard/weathercard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    TodaysWeatherComponent,
    HeaderComponent,
    ChiplistComponent,
    KelvinToCelciusPipe,
    KelvinToFahrenheitPipe,
    WeeksWeatherComponent,
    WeathercardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
