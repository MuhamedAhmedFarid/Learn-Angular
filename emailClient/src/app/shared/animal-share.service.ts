import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalShareService {
  selectedAnimal: any;
  favoriteAnimals: any[] = [];
  favoriteAnimalIds: number[] = [];// Change the name to be more descriptive
  isPink = false

  constructor() { }

}
