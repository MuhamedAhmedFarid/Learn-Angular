import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoFave(product: any) {
    const existingProductIndex = this.cartItemList.findIndex((item : any) => item.id === product.id);

    if (existingProductIndex === -1) {
      this.cartItemList.push(product);
      console.log('Added to favorites:', product);
    } else {
      this.cartItemList.splice(existingProductIndex, 1);
      console.log('Removed from favorites:', product);
    }

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log('Updated cartItemList:', this.cartItemList);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
