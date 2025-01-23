import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products?limit=5';
  constructor(private _httpClient: HttpClient) { }
  //stringifiedData: any; 
  myData = {  
    "title": "test product",
    "price": "13.5",
    "description": "lorem ipsum set",
    "image": "https://i.pravatar.cc",
    "category": "electronic"
  }; 
  
    // Convert to JSON  
    stringifiedData: any = JSON.stringify(this.myData);  
    //console.log(this.stringifiedData);  

public getProduct(): Observable<IProduct[]>{
  return this._httpClient.get<IProduct[]>(this.baseURL);
}

public postProduct() {
  let res = this._httpClient.post(this.baseURL,this.stringifiedData);
  console.log("Resultado:::",res);
  return res;
}

}
