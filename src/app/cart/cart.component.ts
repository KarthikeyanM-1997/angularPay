import { Component, OnInit, NgZone } from '@angular/core';
import { ProductCart } from '../product-cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare const Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productData: any;

  cartData: any;

  cartTotalPrice: number = 0;

  public rzp: any;

  constructor(private productDataService: ProductCart, private http: HttpClient, private router: Router, private zone: NgZone) {

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

    let options = {
      "key": "rzp_test_DrY9EdJEPPOfSG", // Enter the Key ID generated from the Dashboard
      "amount": this.cartTotalPrice + "00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Shopping",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "handler": this.paymentSuccess.bind(this),
      "prefill": {
        "name": "",
        "email": "",
        "contact": ""
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#F37254"
      }
    };

    console.log(this.cartTotalPrice);
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }


  paymentSuccess(res: any) {
    this.zone.run(() => {
      console.log(res);
      this.router.navigate(["/paymentSuccess"])
    });
  }

}
