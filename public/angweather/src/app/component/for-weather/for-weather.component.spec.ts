import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWeatherComponent } from './for-weather.component';

describe('ForWeatherComponent', () => {
  let component: ForWeatherComponent;
  let fixture: ComponentFixture<ForWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
