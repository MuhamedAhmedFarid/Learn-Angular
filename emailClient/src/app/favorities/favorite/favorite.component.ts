import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Router } from '@angular/router';
import { AnimalShareService } from '../../shared/animal-share.service';
import { CommonModule } from '@angular/common';
import { PetfinderService } from '../../find/find.service';
import { FavoriteServiceService } from '../favorite-service.service';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../pages/header/header.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CardComponent, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  animals: any = [];
  animalTotal!: number;

  ids: any = []
  filteredAnimals: any[] = [];

  toggle = true
  constructor(private animalShareService: AnimalShareService, private petfinderService: PetfinderService, private favoriteSerivce: FavoriteServiceService) {}

  ngOnInit() {
    this.favoriteSerivce.getProducts()
    .subscribe(res=>{
      this.animals = res;
      this.animalTotal = this.favoriteSerivce.getTotalPrice()
      this.animalTotal = res.length

    })
    setTimeout(() => {
      this.showAlert('Once you refresh the page all the favorites will be gone I am not a storing them in a local storage as am doing with the adopt!');
    }, 1500);

  }
  removeAnimalFromFavorite(item : any) {
    console.log('this is the removed favorite animal', item);
    console.log(`deleted ${item} from Favorite.`);
    this.favoriteSerivce.removeCartItem(item);
  }
  private showAlert(message: string): void {
    window.alert(message);
  }

}

