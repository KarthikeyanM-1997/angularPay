import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductCart } from '../product-cart';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productData: any;

  cartSize = 0;

  constructor(private http: HttpClient, private productDataService: ProductCart, private toastr: ToastrService) {

    this.http.get("https://5ed162594e6d7200163a0830.mockapi.io/rvsp/products").subscribe((data) => {

      this.productData = data;

      console.log(data);

      this.productDataService.setProductList(data);

      this.productDataService.cartSizeObservable.subscribe((msg) => { this.cartSize = msg });

    });
  }

  addToCart(item) {
    this.productDataService.addToCart(item);
    this.toastr.success('Added item to Cart', item.product_name);
  }

  clearCart() {
    this.productDataService.clearCart();
  }


  ngOnInit(): void {

  }

}
