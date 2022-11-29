import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsContactComponent } from './cars-contact/cars-contact.component';
import { VolkswagenCarsComponent } from './volkswagen-cars/volkswagen-cars.component';
import { VolkswagenSpecsComponent } from './volkswagen-specs/volkswagen-specs.component'


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarsContactComponent,
    VolkswagenCarsComponent,
    VolkswagenSpecsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
