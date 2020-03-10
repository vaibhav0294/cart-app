import { Pipe, PipeTransform } from '@angular/core';
import { iProduct } from './product.model';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(value: Array<iProduct>,param : String): iProduct[] {

  switch (param) {
      case 'high-to-low': return value.sort((low, high) => high.price - low.price);
        break;
      case 'low-to-high': return value.sort((low, high) => low.price - high.price);
        break;
      case 'discount' : return  value.sort((low, high) => high.discount - low.discount);
      break;
      default: return value;
    }
  }

}
