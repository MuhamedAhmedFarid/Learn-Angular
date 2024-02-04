import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PetfinderService } from '../find.service';


@Component({
  selector: 'app-header-find',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-find.component.html',
  styleUrls: ['./header-find.component.css']
})
export class HeaderFindComponent {
  showDropdown = false;
  showDropdownColors = false;
  showDropdownGender: boolean = false;
  showDropdownBreed: boolean = false;
  animalType = '';
  animalColor = '';
  animalGender = '';
  colors: any = []
  genders: any = []
  breeds: any = [];
  @Input() animals!: string[];

  animalTypes: any[] = []; // Change the type based on the actual structure of your data
  types: any[] = [];
  @Output() getGivenAnimals = new EventEmitter<{ type: string, color: string, gender: string, breed: string }>

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  hideDropdowns() {
    this.showDropdown = false;
    this.showDropdownColors = false;
    this.showDropdownGender = false;
    this.showDropdownBreed = false;
  }


  ngOnInit() {
    this.petfinderService.getAnimalTypes().subscribe(
      (res: any) => {
        this.types = res.types;
        this.animalTypes = this.types;
        console.log('types', this.types);

        // Extract and store all colors
        this.colors = this.extractAllColors(this.types);
        console.log('Colors', this.colors);

        // Log colors for each type
        this.types.forEach((type: any) => {
          console.log('Colors for', type.name, ':', type.colors);
        });
      },
      (error: any) => {
        console.error('Error fetching animal types:', error);
      }
    );
    this.genders = ['Male', "Female"]

  }


  private extractAllColors(types: any[]): string[] {
    // Use reduce to concatenate all colors into a single array
    return types.reduce((allColors, type) => {
      if (type.colors && type.colors.length > 0) {
        // Concatenate the colors array from the current type to the overall colors array
        return allColors.concat(type.colors);
      }
      return allColors;
    }, []);
  }

  selectAnimalType(type: string) {
    this.animalType = type;
    this.fetchColorsByType(type);
    this.fetchGendersByType(type)
    this.petfinderService.getBreeds(type).subscribe(
      (res : any) => {
        this.breeds = res.breeds;
        console.log('breeds', this.breeds);
      },
      (error) => {
        console.error('Error fetching breeds:', error);
      }
    );
    this.getGivenAnimals.emit({ type: this.animalType, color: '', gender: '', breed: '' });
  }
  selectAnimalColor(color: string) {
    this.animalColor = color;
    this.fetchColorsByType(this.animalType);

    this.getGivenAnimals.emit({ type: this.animalType, color: this.animalColor, gender: '', breed: '' });
  }
  selectAnimalGender(gender: string) {
    this.animalGender = gender;
    this.fetchGendersByType(this.animalType);
    this.getGivenAnimals.emit({ type: this.animalType, color: this.animalColor, gender: gender, breed: '' });
  }

  fetchColorsByType(type: string) {
    const selectedType = this.animalTypes.find(animalType => animalType.name === type);
    console.log('Selected Type:', selectedType, type);

    if (selectedType && selectedType.colors) {
      this.colors = selectedType.colors || [];
      console.log('Colors:', this.colors, this.colors.length);
    }
  }

  fetchGendersByType(type: string) {
    const selectedType = this.animalTypes.find(animalType => animalType.name === type);
    console.log('Selected Type:', selectedType, type);

    if (selectedType && selectedType.genders) {
      this.genders = selectedType.genders || [];
      console.log('Genders:', this.genders, this.genders.length);
    } else {
      // this.genders = [];
      console.log('No genders found for the selected type.');
    }
  }




  constructor(private petfinderService: PetfinderService) { }
}
