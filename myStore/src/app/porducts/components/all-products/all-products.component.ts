import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  products:any[] = []
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
    })
  }
}
