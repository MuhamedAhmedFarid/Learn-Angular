import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import {ClassDirective} from './class.directive/ClassDirective'
import { ClassDirective } from './class.directive'
import { TimesDirective } from './times.directive'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pages';
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1661524853342-78d70546745a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp1bmdlbHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Waterfull',
      url: 'https://plus.unsplash.com/premium_photo-1669863283528-0b85a5809dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmdWx8ZW58MHx8MHx8fDA%3D'
    },


  ]


  checkWidowIndex(index : number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
