import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VolkswagenCarsComponent } from "./volkswagen-cars/volkswagen-cars.component";
import { VolkswagenSpecsComponent } from "./volkswagen-specs/volkswagen-specs.component";
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsContactComponent } from './cars-contact/cars-contact.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cars',
        pathMatch: 'full'
    },
    {
        path: 'volkswagen',
        component: VolkswagenCarsComponent
    },
    {
        path: 'especificaciones',
        component: VolkswagenSpecsComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule { }