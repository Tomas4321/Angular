import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsContactComponent } from './cars-contact.component';

describe('CarsContactComponent', () => {
  let component: CarsContactComponent;
  let fixture: ComponentFixture<CarsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
