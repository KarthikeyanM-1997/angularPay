import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductCart {

    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    private cartList = new BehaviorSubject<any>([]);
    cartObservable = this.cartList.asObservable();

    private productList = new BehaviorSubject<any>([]);
    productObservable = this.productList.asObservable();

    private cartSize = new BehaviorSubject(0);
    cartSizeObservable = this.cartSize.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    setProductList(products: any) {
        this.productList.next(products);
    }

    addToCart(product: any){
        const currentValue = this.cartList.value;
        const updatedValue = [...currentValue, product];
        this.cartList.next(updatedValue);
        this.cartSize.next(this.cartSize.value + 1);
    }

}
