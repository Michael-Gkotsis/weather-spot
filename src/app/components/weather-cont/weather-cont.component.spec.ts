import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContComponent } from './weather-cont.component';

describe('WeatherContComponent', () => {
  let component: WeatherContComponent;
  let fixture: ComponentFixture<WeatherContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
