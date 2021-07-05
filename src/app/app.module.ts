import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { WeatherContComponent } from './components/weather-cont/weather-cont.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { DataFetchService } from './services/data-fetch.service';
import { SharedEventsService } from './services/shared-events.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchLocationComponent,
    WeatherContComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataFetchService,SharedEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
