import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FidzuluComponent } from './fidzulu/fidzulu.component';

// this is just a test connection , it needs to be modified
// in the form /{parameter} for example -> /books
const routes: Routes = [
  {path:'service',component: FidzuluComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
