import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import {ElementsHomemComponent} from './elements-homem/elements-homem.component'
import { SharedModule } from '../shared/shared.module';
// import { PlaceholderComponent } from './placeholder/placeholder.component'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ElementsHomemComponent,
    SharedModule
    // PlaceholderComponent
  ],
  exports: []

})
export class ElementsModule { }
