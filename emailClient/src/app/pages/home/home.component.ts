import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee, faGear, faHeart, faMagnifyingGlass, faPaw, faUser } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../auth/auth.service';
import { ViewChild, ElementRef } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

type RouterNameMap = {
  [key: string]: string;
};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, HeaderComponent,SidebarComponent, RouterOutlet, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  icon = faGear
  icon1 = faMagnifyingGlass
  icon3 = faHeart
  icon4 = faPaw
  icon5= faBars
  sidebarOpen: Boolean = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }


  constructor(private authService: AuthService, private router: Router) {}
  signedin = false




  // onLogout() {
  //   this.authService.signout().subscribe(() => {})
  // }

  @ViewChild('sidenavMain') sidenavMain: any;
  @ViewChild('logoImg') logoImg: any;
  @ViewChild('navItemTitleA') navItemTitleA: any;
  @ViewChild('navItemTitleB') navItemTitleB: any;

  isOpen: boolean = true;

  routeNames: RouterNameMap = {
    '/aaaaa': './AAAAA_component',
    '/bbbbb': './BBBBB_component',
  };
  routeName: string = '';

  routerEvents: Subscription | undefined;
  ngOnInit() {
    // reference to https://www.tektutorialshub.com/angular/how-to-get-the-current-route-or-url-in-angular/
    this.routerEvents = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const eventUrl = event.url;
        // console.log(eventUrl);
        this.routeName = this.routeNames[eventUrl];
      }
    });
  }
  toggleSidenav() {
    this.isOpen = !this.isOpen;

    // reference to https://stackoverflow.com/questions/63349146/how-to-toggle-class-when-click-outside-element-with-javascript
    if (this.isOpen) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');

      /* Option 1 */
      // this.sidenavMain.nativeElement.style = '';
      // this.logoImg.nativeElement.style = '';
      // this.navItemTitleA.nativeElement.style = '';

      /* Option 2 */
      this.sidenavMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.navItemTitleA.nativeElement.removeAttribute('style');
      this.navItemTitleB.nativeElement.removeAttribute('style');
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');

      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.navItemTitleA.nativeElement.style.display = 'none';
      this.navItemTitleB.nativeElement.style.display = 'none';
    }
  }
}

