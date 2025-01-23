import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/apisnd.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})

export class SelectComponent implements OnInit{
  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService){

  }
  ngOnInit(): void {
    this._apiService.getProductSndApi().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productsList=data;

    })
  }
}
