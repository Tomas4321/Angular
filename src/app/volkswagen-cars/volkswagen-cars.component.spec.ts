import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolkswagenCarsComponent } from './volkswagen-cars.component';

describe('VolkswagenCarsComponent', () => {
  let component: VolkswagenCarsComponent;
  let fixture: ComponentFixture<VolkswagenCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolkswagenCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolkswagenCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
