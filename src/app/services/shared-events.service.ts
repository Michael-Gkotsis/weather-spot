import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  private subject = new Subject<any>();
  constructor() { }

  sendSubmitEvent(){
    this.subject.next();
  }

  getSubmitEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
