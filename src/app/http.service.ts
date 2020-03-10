import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from "@angular/common/http";
import { iProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = "https://api.myjson.com/bins/qzuzi" 

  constructor(private _http:HttpClient) {}

  public getProductList() : any {
    let productListResponse = this._http.get (this.baseUrl)
    console.log("IN HTTP_SERVICE")
    return productListResponse;
  }

  calculateSellingPrice(product:iProduct){
    return  Math.ceil(product.price / (1-(product.discount/100)))
  }

}
