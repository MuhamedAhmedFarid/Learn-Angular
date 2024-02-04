import { Routes } from '@angular/router';
import { AllProductsComponent } from './porducts/components/all-products/all-products.component';
import { CardComponent } from './cards/components/card/card.component';
import { ProductsDetailsComponent } from './porducts/components/products-details/products-details.component';

export const routes: Routes = [
  { 'path': 'products', component: AllProductsComponent },
  { 'path': 'details', component: ProductsDetailsComponent },
  { 'path': 'card', component: CardComponent },
  { 'path': '**',  redirectTo:"products", pathMatch: 'full' }
];
