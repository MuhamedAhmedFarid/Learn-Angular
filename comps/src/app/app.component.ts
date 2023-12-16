import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CollectionsModule} from './collections/collections.module'
// import { ElementsModule } from './elements/elements.module'
import { ModsModule } from './mods/mods.module'
import { ViewsModule } from './views/views.module';
// import {ElementsHomemComponent} from './elements/elements-homem/elements-homem.component'
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,RouterModule, ModsModule, ViewsModule, CollectionsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
