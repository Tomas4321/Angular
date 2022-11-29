import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolkswagenSpecsComponent } from './volkswagen-specs.component';

describe('VolkswagenSpecsComponent', () => {
  let component: VolkswagenSpecsComponent;
  let fixture: ComponentFixture<VolkswagenSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolkswagenSpecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolkswagenSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
