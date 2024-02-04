import { Component, OnInit } from '@angular/core';
import { AnimalShareService } from '../../shared/animal-share.service';
import { PetfinderService } from '../../find/find.service';
import { AdoptService } from '../adopt.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-adopted-pets',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './adopted-pets.component.html',
  styleUrls: ['./adopted-pets.component.css']
})
export class AdoptedPetsComponent implements OnInit {
  animals: any = [];
  animalTotal!: number;
  ids: any = [];
  buttonToggle = false;

  filteredAnimals: any[] = [];

  constructor(private animalShareService: AnimalShareService, private petfinderService: PetfinderService, private adoptme: AdoptService) {}

  ngOnInit() {
    // Retrieve the buttonToggle state from local storage
    const storedButtonToggle = localStorage.getItem('buttonToggle');
    this.buttonToggle = storedButtonToggle ? JSON.parse(storedButtonToggle) : false;

    // Subscribe to changes in the adopted animals
    this.adoptme.getProducts().subscribe(res => {
      this.animals = res;
      this.animalTotal = this.adoptme.getTotalPrice();
      this.animalTotal = res.length
    });
  }

  removeAnimalFromAdoption(item: any) {
    console.log('helkjdlkfj', item);
    console.log(`deleted ${item} from Adoption.`);
    this.adoptme.removeFromAdoption(item);

    // Update the buttonToggle state and save it to local storage
    this.buttonToggle = !this.buttonToggle;
    localStorage.setItem('buttonToggle', JSON.stringify(this.buttonToggle));
  }
}
