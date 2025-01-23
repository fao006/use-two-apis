import { Component, OnInit } from '@angular/core';
import { ILocalProduct, IProduct } from '../models/product.model';
import { ApilocalService } from '../services/apilocal.service';

@Component({
  selector: 'app-select-local-api',
  templateUrl: './select-local-api.component.html',
  styleUrls: ['./select-local-api.component.css'],
})
export class SelectLocalAPIComponent implements OnInit {
  productsList: IProduct[] = [];

  constructor(private _apiLocalService: ApilocalService) {}
  ngOnInit(): void {
    this._apiLocalService.obtenerProductos().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productsList = data;
    });
  }
}

