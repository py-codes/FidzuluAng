import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FidzuluComponent } from './fidzulu/fidzulu.component';
import { BooksComponent } from './books/books.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { DvdsComponent } from './dvds/dvds.component';
import { BikesComponent } from './bikes/bikes.component';
import { FoodComponent } from './food/food.component';
import { ToysComponent } from './toys/toys.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FidzuluComponent,
    BooksComponent,
    LaptopsComponent,
    DvdsComponent,
    BikesComponent,
    FoodComponent,
    ToysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
