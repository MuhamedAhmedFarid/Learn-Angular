import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {TranslateModule} from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule
,CommonModule, RouterOutlet, SigninComponent, SignupComponent, HttpClientModule,HomeComponent,HeaderComponent,
    SidebarComponent,
    RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSignUpActive: boolean = true;
  signedin$!: BehaviorSubject<boolean>;
  // signedin = false


  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe((res) => {
      console.log('this is the userName',res);

    })
  }

  title = 'emailClient';
}
