import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL2 = 'https://fakestoreapi.com/products';
  constructor(private _httpClient: HttpClient) { }
  
public getProductSndApi(): Observable<IProduct[]>{
  return this._httpClient.get<IProduct[]>(this.baseURL2);
}
}