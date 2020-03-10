import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { iProduct } from '../product.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public productsInCart: iProduct[];
  _currentValues:number[];

  @Output()
  filterParams: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    }

    onSliderChange(selectedValues: number[]) {
      this._currentValues = selectedValues;
      console.log("Inside_Filter_Component.ts : ",this._currentValues)
    
    }

    public setFilter()
    {
      this.filterParams.emit(this._currentValues)
    }
}
