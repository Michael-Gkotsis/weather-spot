import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  getLocation$!: Observable<any>;
  private getLocationSubject = new Subject<any>();
  // baseUrl : string = 'http://localhost:3000'
  lat : string = '39.643452'
  long: string = '22.413208'
  location!: string;
  // baseUrl : string = `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.location}&lang=en&units=%22metric%22`
  constructor(private http:HttpClient) {
    this.getLocation$ = this.getLocationSubject.asObservable();
   }

   getData(location:string): Observable<any>{
    return this.http.get<any>(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,{headers : {
      "x-rapidapi-key": "867931e1e3msh39df46385b8cc62p1face1jsnfc4a66a9623a",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
    }})

      }

  getLocation(location : string){
    this.getLocationSubject.next(location)
  }
}
