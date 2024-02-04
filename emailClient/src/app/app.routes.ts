import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SettingComponent } from './settings/setting/setting.component';
import { FavoriteComponent } from './favorities/favorite/favorite.component';
import { FindPetsComponent } from './find/find-pets/find-pets.component';
import { AdoptedPetsComponent } from './Adopt/adopted-pets/adopted-pets.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },
  { path: 'settings', component: SettingComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'search', canActivate: [authGuard],component: FindPetsComponent },
  // { path: 'search/:searchTerm', canActivate: [authGuard],component: FindPetsComponent },
  { path: 'adopted', component: AdoptedPetsComponent },
  { path: 'profile', component: ProfileComponent },
];
