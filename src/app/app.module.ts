import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFetchService } from './services/data-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    WeatherListComponent,
    WeatherDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
