import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Books } from 'src/Model/books.model';
import { BikesComponent } from './bikes/bikes.component';
import { BooksComponent } from './books/books.component';
import { DvdsComponent } from './dvds/dvds.component';
import { FidzuluComponent } from './fidzulu/fidzulu.component';
import { FoodComponent } from './food/food.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { ToysComponent } from './toys/toys.component';

// this is just a test connection , it needs to be modified
// in the form /{parameter} for example -> /books
const routes: Routes = [
  {path:'books',component: BooksComponent },
  {path:'laptops',component: LaptopsComponent },
  {path:'dvds',component: DvdsComponent },
  {path:'bikes',component: BikesComponent },
  {path:'food',component: FoodComponent },
  {path:'toys',component: ToysComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
