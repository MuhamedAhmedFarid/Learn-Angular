import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  private cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {
    // Load cartItemList from localStorage on service initialization
    const storedCartItemList = localStorage.getItem('cartItemList');
    if (storedCartItemList) {
      this.cartItemList = JSON.parse(storedCartItemList);
      this.productList.next(this.cartItemList);
    }
  }

  private updateStorage() {
    // Update localStorage whenever cartItemList is modified
    localStorage.setItem('cartItemList', JSON.stringify(this.cartItemList));
  }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(this.cartItemList);
    this.updateStorage();
  }

  addForAdoption(product: any) {
    const existingProductIndex = this.cartItemList.findIndex((item: any) => item.id === product.id);

    if (existingProductIndex === -1) {
      this.cartItemList.push(product);
      console.log('Added to favorites:', product);
    } else {
      this.cartItemList.splice(existingProductIndex, 1);
      console.log('Removed from favorites:', product);
    }

    this.productList.next(this.cartItemList);
    this.updateStorage();
    console.log('Updated cartItemList:', this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeFromAdoption(product: any) {
    this.cartItemList = this.cartItemList.filter((a: any) => product.id !== a.id);
    this.productList.next(this.cartItemList);
    this.updateStorage();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.updateStorage();
  }
}
