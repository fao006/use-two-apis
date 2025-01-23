import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SelectComponent } from './select/select.component';
import { InsertComponent } from './insert/insert.component';
import { SelectLocalAPIComponent } from './select-local-api/select-local-api.component';
import { UsemockComponent } from './usemock/usemock.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SelectComponent,
    InsertComponent,
    SelectLocalAPIComponent,
    UsemockComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
