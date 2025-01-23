import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocalProduct, IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ApilocalService {
  private baseURL = 'https://localhost:8080/productos';
  constructor(private _httpClient: HttpClient) {}

  public obtenerProductos(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseURL);
  }
}


