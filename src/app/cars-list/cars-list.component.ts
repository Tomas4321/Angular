import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars = {
    marca : "Volkswagen",
    nombre : "Vento 2.0 GLI",
    modelo : "2019",
    categoria : "Auto",
    imagen : "assets/img/ventoo.jpg"
  };

  tiguan = {
    marca : "Volkswagen",
    nombre : "Tiguan 2.0 TSI",
    modelo : "2018",
    categoria : "Suv",
    imagen : "assets/img/tiguan.jpg"
  }
  
  amarok = {
    marca : "Volkswagen",
    nombre : "Amarok V6 3.0 TDI",
    modelo : "2020",
    categoria : "Camioneta",
    imagen : "assets/img/amarok.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
