import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productsList: IProduct[] = [];
  constructor(private _apiService: ApiService){
  }
  ngOnInit(): void {
    this._apiService.postProduct().subscribe(

      
    )  
  }
}
