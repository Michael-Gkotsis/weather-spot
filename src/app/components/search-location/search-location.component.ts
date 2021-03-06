import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { SharedEventsService } from 'src/app/services/shared-events.service';
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {
  text: string = '';
  @Output() passLocation: EventEmitter<string> = new EventEmitter;
  constructor(private fetchData: DataFetchService, private shareEvent: SharedEventsService) {

  }

  ngOnInit(): void {

  }

  // location: string[] = [];
  // onKeyUp(event : KeyboardEvent){
  //   this.location.push((event.target as HTMLInputElement).value)
  // }




  onSubmit(){
     if(!this.text){
       alert('Please add a location')
       return;
     }
     this.fetchData.getLocation(this.text);
     this.text = ''
     this.shareEvent.sendSubmitEvent();
  }


}
