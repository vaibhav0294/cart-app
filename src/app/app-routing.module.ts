import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path : 'home', component:ShoppingListComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'cart', component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
