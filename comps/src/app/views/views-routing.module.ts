import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: ViewsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
