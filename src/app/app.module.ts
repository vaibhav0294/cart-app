import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { CartService } from './cart.service';
import {FormsModule} from '@angular/forms';
import { NpnSliderModule } from "npn-slider";
import { PriceRangeFilter } from './price-range-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    SortComponent,
    FilterComponent,
    CartComponent,
    SortByPricePipe,
    PriceRangeFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NpnSliderModule
  ],
  providers: [HttpService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
