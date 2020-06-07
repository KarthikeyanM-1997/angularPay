import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { FinishedPaymentComponent } from './finished-payment/finished-payment.component';


const routes: Routes = [{
  path: "cart", component: CartComponent
},
{
  path: "", component: ShopComponent
},
{
  path: "paymentSuccess", component: FinishedPaymentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }