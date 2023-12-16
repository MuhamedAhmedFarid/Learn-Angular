import { Routes } from '@angular/router';
import { ElementsHomemComponent } from './elements/elements-homem/elements-homem.component'
import { ViewsHomeComponent } from './views/views-home/views-home.component'
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModsHomeComponent } from './mods/mods-home/mods-home.component';
export const routes: Routes = [
  {
    path: 'elements', loadChildren: () =>
    import('./elements/elements.module').then((m) => m.ElementsModule)
  },
  {
    path: 'collections', loadChildren: () =>
    import('./collections/collections.module').then((m) => m.CollectionsModule)
  },
  {
    path: 'views', loadChildren: () =>
    import('./views/views.module').then((m) =>m.ViewsModule)
  },
  {
    path: 'mods', loadChildren: () =>
    import('./mods/mods.module').then((m) => m.ModsModule)
  },
  {path: '', component:  HomeComponent},
  {path: '', component: ElementsHomemComponent},

  {path: 'views', component: ViewsHomeComponent},
  {path: '', component: CollectionsHomeComponent},
  {path: '', component: ModsHomeComponent},
  {path: '**', component: NotFoundComponent},


];
