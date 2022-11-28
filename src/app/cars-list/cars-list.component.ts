import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  Volkswagen: Cars[] = [ 
    {
      marca : "Volkswagen",
      nombre : "Vento 2.0 GLI",
      modelo : "2019",
      categoria : "Auto",
      precio : 20000,
      stock : 100001,
      cantidad : 0,
      imagen : "assets/img/ventoo.jpg",
    },  
    {
      marca : "Volkswagen",
      nombre : "Tiguan 2.0 TSI",
      modelo : "2018",
      categoria : "Suv",
      precio : 25000,
      stock : 1500000,
      cantidad : 0,
      imagen : "assets/img/tiguan.jpg",
    },
    {
      marca : "Volkswagen",
      nombre : "Amarok V6 3.0 TDI",
      modelo : "2020",
      categoria : "Camioneta",
      precio : 40000,
      stock : 0,
      cantidad : 0,
      imagen : "assets/img/amarok.jpg",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  restarCantidad(cars: Cars): void{
    if(cars.cantidad > 0 ){
      cars.cantidad--;
    }
  }

  incrementarCantidad(cars: Cars): void{
    if(cars.cantidad < cars.stock){
      cars.cantidad++;
    }
  }

  cambiarCantidad(event: any, cars: Cars ): void{
    console.log(event.key);
    if(event.cars.stock > event.cars.cantidad){
      alert("No hay stock");
    }
    event.preventDefault();
  }

}
