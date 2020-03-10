import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { iProduct } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-app';

  public noOfItemsInCart = 0 ;

  constructor(public cartService:CartService){}

  ngOnInit(){
    this.cartService.getItems().subscribe((products:iProduct[]) => {
      this.noOfItemsInCart = products.length;
      console.log("TOTAL ITEMS IN CART ", this.noOfItemsInCart)
    });
  }
}
