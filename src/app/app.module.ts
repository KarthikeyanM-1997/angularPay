import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductCart } from './product-cart';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductCart],
  bootstrap: [AppComponent]
})
export class AppModule { }
