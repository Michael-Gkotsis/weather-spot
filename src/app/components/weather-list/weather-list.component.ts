import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { SharedEventsService } from 'src/app/services/shared-events.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
submitEventSubscription!: Subscription;
  constructor(private fetchData : DataFetchService, private shareEvent: SharedEventsService) {
    this.fetchData.getLocation$.subscribe((location:string) => {
      this.location = location;
    })
    this.submitEventSubscription= this.shareEvent.getSubmitEvent().subscribe(() => {
      this.onClick();
    })
  }
  location: string = 'Larisa';
  weather : any = <any>{};
  ngOnInit(): void {
  }

  onClick(){
    this.fetchData.getData(this.location).subscribe(weath => this.weather = weath, error => console.log(error));
  }



}
