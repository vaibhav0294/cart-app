import { Injectable } from '@angular/core';
import { iProduct } from './product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { iTotal } from './total.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsInCartSubject : BehaviorSubject<iProduct[]> = new BehaviorSubject([]);
  private totalAmountSubject : BehaviorSubject<iTotal> = new BehaviorSubject({amount:0, discount:0});
  
  private productsInCart: iProduct[] = [];
  private total : iTotal = {amount:0, discount:0};

  constructor() {
    this.productsInCartSubject.subscribe(_=>this.productsInCart=_)
    this.totalAmountSubject.subscribe(_=>this.total=_)
    
  } 

  public addToCart(product:iProduct) 
  {
    this.productsInCartSubject.next([...this.productsInCart,product]);
    this.updateTotalAmount();
  }

  public updateTotalAmount(){
    this.total.amount = 0;
    this.total.discount = 0;
    
    for(var item of this.productsInCart)
    {
      this.total.amount += item.price;
      this.total.discount += this.calculateSellingPrice(item) - item.price;
    }
    this.totalAmountSubject.next(this.total);
  }

  public removeFromCart(item: iProduct) {
    const currentItems = [...this.productsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.productsInCartSubject.next(itemsWithoutRemoved);
    this.updateTotalAmount();
  }


  public getItems() : Observable<iProduct[]>{
    
    return this.productsInCartSubject;
  }

  public getTotalAmount(): Observable<iTotal> {
    return this.totalAmountSubject;
  }

  calculateSellingPrice(product:iProduct){
    return  Math.ceil(product.price / (1-(product.discount/100)))
  }

}
