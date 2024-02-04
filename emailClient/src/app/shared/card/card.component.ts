import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FavoriteServiceService } from '../../favorities/favorite-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  icon = faHeart;
  @Input() toggle: boolean = false;
  @Input() buttonToggle: boolean = false;
  @Input() size!: string;
  @Input() gender!: string;
  @Input() age!: string;
  @Input() url!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() breed!: string;
  @Input() pupleshed!: string;
  @Input() id!: number;
  @Output() addToFave = new EventEmitter<any>();
  @Output() addForAdo = new EventEmitter<any>();
  @Output() removeFromFavorite = new EventEmitter<any>();
  @Output() removeAnimalFromAdoption = new EventEmitter<any>();
  @Output() removeAnimalFromFavorite = new EventEmitter<any>()
  @Output() removeAnimalFavorite = new EventEmitter<any>()
  constructor(private favorite: FavoriteServiceService) { }

  ngOnInit() {
    this.loadButtonToggleFromLocalStorage(); // Load buttonToggle state from local storage
    // this.setButtonColor();
  }

  addToFavorites() {
    const item: any = 'example item';
    console.log('its added');
    this.addToFave.emit(item);
    this.toggle = !this.toggle;

  }
  gitRidOfIt() {
    console.log('its removed');
    this.removeAnimalFavorite.emit()
    this.removeAnimalFromFavorite.emit()
    this.toggle = !this.toggle

  }

  addForAdoption() {
    const item: any = 'example itme';
    this.addForAdo.emit(item);
    this.buttonToggle = !this.buttonToggle;

    this.saveButtonToggleToLocalStorage(); // Save buttonToggle state to local storage
  }

  removeFromAdoption() {
    console.log('its removed');
    const item: any = 'example item';
    this.removeFromFavorite.emit();
    this.removeAnimalFromAdoption.emit();
    this.buttonToggle = !this.buttonToggle;

    this.saveButtonToggleToLocalStorage(); // Save buttonToggle state to local storage
  }

  private saveButtonToggleToLocalStorage() {
    localStorage.setItem(`buttonToggle_${this.id}`, JSON.stringify(this.buttonToggle));
  }

  private loadButtonToggleFromLocalStorage() {
    const storedButtonToggle = localStorage.getItem(`buttonToggle_${this.id}`);
    if (storedButtonToggle) {
      this.buttonToggle = JSON.parse(storedButtonToggle);
    }
  }


}
