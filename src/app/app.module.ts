import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
 

import { KelvinToCelciusPipe, KelvinToFahrenheitPipe } from 'src/pipes/weather.pipe';

import { TodaysWeatherComponent } from './todays-weather/todays-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ChiplistComponent } from './shared/chiplist/chiplist.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TodaysWeatherComponent,
    HeaderComponent,
    ChiplistComponent,
    KelvinToCelciusPipe,
    KelvinToFahrenheitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
