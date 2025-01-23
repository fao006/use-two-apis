import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit {
  productsList: IProduct[] = [];
  constructor(private _apiService: ApiService) {}
  ngOnInit(): void {
    this._apiService.postProduct().subscribe();
  }
}
