import { Routes } from '@angular/router';
import { SettingComponent } from './Settings/setting/setting.component';
import { MyFovoritiesComponent } from './Favourties/my-fovorities/my-fovorities.component';

export const routes: Routes = [
  { 'path': 'settings', component: SettingComponent },
  { 'path': 'favorite', component: MyFovoritiesComponent },
];
