import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [{
  path: "cart", component: CartComponent
},
{
  path: "", component: ShopComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
