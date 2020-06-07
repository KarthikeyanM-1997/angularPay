import { Component, OnInit } from '@angular/core';
import { ProductCart } from '../product-cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productData: any;

  cartData: any;

  cartTotalPrice: number = 0;

  constructor(private productDataService: ProductCart, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.productDataService.productObservable.subscribe((data) => { this.productData = data });

    this.productDataService.cartObservable.subscribe((data) => {
      this.cartData = data;

      for (let i = 0; i < Object.keys(data).length; i++) {
        this.cartTotalPrice += parseInt(this.cartData[i].product_price);
      }
    });
  }

  checkout() {

    var body = {
      amount: 50000,
      currency: "INR",
      receipt: "order_rcptid_1123",
      payment_capture: '0'
    };

    let header = new HttpHeaders({ "content-type": "application/json", 'mode' : 'no-cors' });

    let options = { headers: header };

    this.http.post("https://api.razorpay.com/v1/orders", body, options).subscribe((data) => { console.log(data); });
  }

}
