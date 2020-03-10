import { Pipe, PipeTransform } from '@angular/core';
import { iProduct } from './product.model';

@Pipe({
  name: 'priceRangeFilter'
})
export class PriceRangeFilter implements PipeTransform {

  transform(value: Array<iProduct>, min:number,max:number): iProduct[] {
    console.log("Sort_By_Pipe")
    console.log("Min : ", min)
    console.log("Max : ", max)
    return value.filter( _=>_.price> min && _.price < max)
  }

}
