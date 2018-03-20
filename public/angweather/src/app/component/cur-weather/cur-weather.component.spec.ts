import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurWeatherComponent } from './cur-weather.component';

describe('CurWeatherComponent', () => {
  let component: CurWeatherComponent;
  let fixture: ComponentFixture<CurWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
