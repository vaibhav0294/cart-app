import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { iProduct } from '../product.model';
import { HttpService } from '../http.service';
import { iTotal } from '../total.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productsInCart: iProduct[];
  public noOfItems: number = 1;
  public itemsQuantity : number = 1;
  public totalCartValue : number;
  public totalDiscount : number;
  
  constructor(private _cartService: CartService, private _httpService: HttpService) { }

  ngOnInit(): void {
    // this.productsInCart = [{ "id": 9090, "name": "Item1", "price": 200, "discount": 10, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }]
    this._cartService.getItems().subscribe((products:iProduct[]) => {
      this.productsInCart = products;
      this.noOfItems = products.length;
      console.log("CART PAGE : PRODUCTS IN CART : ",this.productsInCart.length)
    });

    this._cartService.getTotalAmount().subscribe((total:iTotal) => {
      this.totalCartValue = total.amount;
      this.totalDiscount  = total.discount;
     });
  }


  removeProductFromCart(product:iProduct)
  {
    this._cartService.removeFromCart(product);
  }
  getActualDiscount(product: iProduct) {
    return this._httpService.calculateSellingPrice(product);
  }

  addToCart(product:iProduct){
    this._cartService.addToCart(product);
  }
}
