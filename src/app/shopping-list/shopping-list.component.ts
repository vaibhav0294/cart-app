import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { iProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public productList: iProduct[];
  public min : number = 0;
  public max : number = 1000;
  public sortByParam : String;
  constructor(public _httpService: HttpService, public _cartService:CartService) { }

  ngOnInit(): void {
    // this.productList = [{ "id": 9090, "name": "Item1", "price": 200, "discount": 10, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }]
    
    this._httpService.getProductList().subscribe(
      data => {
        this.productList = data;
      },
      error => {
        console.log("Some Error Occured")
      });
  }

  getActualDiscount(product : iProduct)
  {
    return this._httpService.calculateSellingPrice(product);
  }

  getSortByValue(sortBy: String) {
    this.sortByParam = sortBy;
    // console.log("Sort_By_Called",sortBy)
    // switch (sortBy) {
    //   case 'high-to-low': this.productList = this.productList.sort((low, high) => high.price - low.price);
    //     break;
    //   case 'low-to-high': this.productList = this.productList.sort((low, high) => low.price - high.price);
    //     break;
    //   case 'discount' :  this.productList = this.productList.sort((low, high) => high.discount - low.discount);
    // }
  }

  setMinMaxFilter(filterParams:number[])
  {

    this.min = filterParams[0];
    this.max = filterParams[1];
    // this.productList.filter( _=>_.price> this.min && _.price < this.max)
  }

  addToCart(product){
      this._cartService.addToCart(product);
  }
}
