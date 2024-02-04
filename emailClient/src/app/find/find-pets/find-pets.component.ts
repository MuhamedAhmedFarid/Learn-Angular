import { Component } from '@angular/core';
import { HeaderFindComponent } from '../header-find/header-find.component';
import { CardFindComponent } from '../card-find/card-find.component';
import { PetfinderService } from '../find.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../pages/header/header.component';


@Component({
  selector: 'app-find-pets',
  standalone: true,
  imports: [HeaderFindComponent,
    SidebarComponent,
    CardFindComponent, PaginationComponent, SpinnerComponent, HeaderComponent],
  templateUrl: './find-pets.component.html',
  styleUrl: './find-pets.component.css'
})
export class FindPetsComponent {
  constructor(private petfinderService: PetfinderService,) { }
  animals = []
  types = []
  // countPerPage = ''
  // totalItemsCount!: number
  // totalCount = ''
  type = ''
  color = ''
  gender = ''
  breed = ''
  toggle = false
  buttonToggle = true
  token = ''
  currentPage: number = 1
  links!: any;
  id!: number;
  loading = true
  ngOnInit() {
    this.petfinderService.getToken().subscribe(
      (response) => {
        // console.log('Access Token:', response['access_token']);
        this.token = response['access_token']
      },
      (error) => {
        console.error('Error getting access token:', error);
        // alert(error)
      }
    );
    this.petfinderService.makeAuthorizedRequest('GET', 'animals', { location: 'New York' },).subscribe(
      (response) => {
        console.log('Petfinder API Response:', response);
        this.loading = false
        this.animals = response.animals

        // this.countPerPage = response.count_per_page
        // this.currentPage = response.curret_page
        // this.totalCount = response.total_pages
        this.id = response.id
      },
      (error) => {
        this.loading = true
        console.error('Error making authorized request:', error);
        alert(error)
        // Handle errors as needed
      }
    );

  }

  changePage(page: number): void {
    console.log(`Changed to page: ${page}`);
    this.currentPage = page;
    this.fetchAnimalsByPage(this.currentPage, this.type, this.color, this.gender, this.breed  );

  }

  getGivenAnimals(type: string, color: string, gender: string, breed: string) {
    this.petfinderService.getGivenAnimals(type, color, gender, breed).subscribe((res: any) => {
      console.log('these are all the data', res);
      let typeAnimal = type
      let colorAnimal = color
      console.log(typeAnimal, colorAnimal, gender);

      this.animals = res.animals;
    });

  }

  fetchAnimalsByPage(page: number, type: string, color: string, gender: string, breed: string): void {
    // Make API request with the updated page and filters
    this.petfinderService.makeAuthorizedRequest('GET', 'animals', { location: 'New York', page, type, color, gender, breed }).subscribe(
      (response) => {
        console.log('Petfinder API Response:', response);
        this.loading = false;
        this.animals = response.animals;


        // Update other properties if needed
      },
      (error) => {
        this.loading = true;
        console.error('Error making authorized request:', error);
        alert(error);
        // Handle errors as needed
      }
    );
  }


}
