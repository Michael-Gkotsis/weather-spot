import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContComponent } from './components/weather-cont/weather-cont.component';

const routes: Routes = [
  {path: "", component: WeatherContComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
