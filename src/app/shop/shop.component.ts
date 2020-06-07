import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductCart } from '../product-cart';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productData : any;

  cartSize = 0;

  constructor(private http : HttpClient, private productDataService: ProductCart) {

    this.http.get("https://5ed162594e6d7200163a0830.mockapi.io/rvsp/products").subscribe((data) => {

      this.productData = data;      

      console.log(data);
      
      this.productDataService.setProductList(data);

      this.productDataService.cartSizeObservable.subscribe((msg) => {this.cartSize = msg});

    });
   }

   addToCart(item){
    console.log(item);
    this.productDataService.addToCart(item);
   }


  ngOnInit(): void {
    
  }

}
