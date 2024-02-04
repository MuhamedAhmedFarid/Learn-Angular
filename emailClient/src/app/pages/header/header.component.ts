import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee, faGear, faHeart, faMagnifyingGlass, faPaw, faUser } from '@fortawesome/free-solid-svg-icons'
import { FavoriteServiceService } from '../../favorities/favorite-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  icon = faGear
  icon1 = faMagnifyingGlass
  icon3 = faHeart
  icon4 = faPaw
  icon5= faBars
  itemNumber  = 0
  constructor(private favoriteList: FavoriteServiceService) {}


  ngOnInit() {
    this.favoriteList.getProducts().subscribe(res => {
      this.itemNumber = res.length
    })
  }
}
