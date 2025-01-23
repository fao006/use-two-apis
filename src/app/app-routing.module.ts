import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { InsertComponent } from './insert/insert.component';
import { SelectComponent } from './select/select.component';
import { SelectLocalAPIComponent } from './select-local-api/select-local-api.component';
import { UsemockComponent } from './usemock/usemock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'select', component: SelectComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'selectLocal', component: SelectLocalAPIComponent },
  { path: 'usemock', component: UsemockComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
