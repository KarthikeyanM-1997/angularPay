import { Component, OnInit } from '@angular/core';
import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-finished-payment',
  templateUrl: './finished-payment.component.html',
  styleUrls: ['./finished-payment.component.css']
})
export class FinishedPaymentComponent implements OnInit {

  constructor(private productDataService: ProductCart) { 


  }

  ngOnInit(): void {
    this.productDataService.clearCart();
  }

}
