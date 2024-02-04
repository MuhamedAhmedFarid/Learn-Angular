import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FavoriteServiceService } from '../../favorities/favorite-service.service';
import { AdoptService } from '../../Adopt/adopt.service';

@Component({
  selector: 'app-card-find',
  standalone: true,
  imports: [FontAwesomeModule, CardComponent, CommonModule],
  templateUrl: './card-find.component.html',
  styleUrl: './card-find.component.css'
})
export class CardFindComponent {
  icon = faHeart
  isPink = false
  good: any = []
  @Input() animals: any[] = [];
  @Input() toggle: boolean = false
  @Input() buttonToggle: boolean = false
  @Output() unAdopt = new EventEmitter<any>()
  @Output() removeAnimalFromAdoption = new EventEmitter<any>()
  @Output() removeAnimalFromFavorite = new EventEmitter<any>()
  favorites: any[] = [];
  adoptions: any[] = []

  currentPage = 1; // Start from page 1
  itemsPerPage = 2;
  slicedData: any[] = [];

  constructor(private favorite: FavoriteServiceService, private adoptme: AdoptService) { }

  getAnimalsForCurrentPage(): any[] {
    const itemsPerPage = 2;
    this.currentPage = Math.max(this.currentPage, 1);

    const startIdx = (this.currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const slicedData = this.animals.slice(startIdx, endIdx);

    return this.good = slicedData;
  }

  ngOnChanges(changes: any): void {
    if (changes.animals) {
      this.getAnimalsForCurrentPage();
    }
  }

  addToFavorites(itme: []) {
    this.favorites.push(itme);
    console.log(`Added ${itme} to favorites.`);
    this.favorite.addtoFave(itme)
  }
  addToAdotption(item: []) {
    this.adoptions.push(item);
    console.log(`Added ${item} to Adoption.`);
    this.adoptme.addForAdoption(item)
  }
  removeFromFavorite(item: []) {
    console.log('hello', item);
    this.removeAnimalFromAdoption.emit(item)
    console.log(`deleted ${item} from Adoption.`);
    this.adoptme.removeFromAdoption(item)
  }
  getRidOfIt(item: []) {
    console.log('hello', item);
    this.removeAnimalFromFavorite.emit(item)
    console.log(`deleted ${item} from Favorite.`);
    this.favorite.removeCartItem(item)
  }


}
