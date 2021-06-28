import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'WeatherSpot'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnHome(){

this.router.navigate([''])
  }
}
