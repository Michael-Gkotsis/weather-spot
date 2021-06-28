import { Component, OnInit,Input } from '@angular/core';
import { Observable,Subscription,Subject } from 'rxjs';
import { SharedEventsService } from 'src/app/services/shared-events.service';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
@Input() weather: any = <any>{};
showData : boolean = false;
submitEventSubscription!: Subscription;
  constructor(private shareEvent: SharedEventsService) {

    this.submitEventSubscription= this.shareEvent.getSubmitEvent().subscribe(() => {
      this.onClick();
    })
  }

  ngOnInit(): void {
  }

  onClick(){
      this.showData = true;
  }

  convertToCelcius(temp:number){
    return (temp - 273.15).toPrecision(4)
  }

}
