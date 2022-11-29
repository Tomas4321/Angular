import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';

import { FormsModule } from '@angular/forms';
import { CarsContactComponent } from './cars-contact/cars-contact.component';
import { VolkswagenCarsComponent } from './volkswagen-cars/volkswagen-cars.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarsContactComponent,
    VolkswagenCarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
