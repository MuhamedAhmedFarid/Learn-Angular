import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee, faGear, faHeart, faMagnifyingGlass, faPaw, faUser } from '@fortawesome/free-solid-svg-icons'
import { FavoriteServiceService } from '../../favorities/favorite-service.service';
import { AuthService } from '../../auth/auth.service';
import { AdoptService } from '../../Adopt/adopt.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  icon1= faBars
  icon2 = faMagnifyingGlass
  icon3 = faHeart
  icon4 = faPaw
  showSidebar = true;
  // length: number = 0;
  itemNumber: number = 0
  adoptNumber: number = 0

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  constructor(private favoriteList: FavoriteServiceService,
    private authService: AuthService,
    private router: Router, private adoptMe: AdoptService) {}
  ngOnInit() {
    this.favoriteList.getProducts().subscribe(res => {
      this.itemNumber = res.length
    })
    this.adoptMe.getProducts().subscribe(res => {
      this.adoptNumber = res.length
    })
  }
  onSignOut() {
    this.authService.signout().subscribe(() => {
      // console.log(res);
      this.router.navigateByUrl('signout')
    })

  }
}
