import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from '../item-list/item-list.component';


@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent,DividerComponent,ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats =  [
    { value: 22, label: '# of Users' },
    { value: 50, label: 'Revenue' },
    { value: 900, label: 'Reviews' },
  ];

  items = [
    {image: 'assets/images/image3.jpg', title: 'Train', desctiption: "This is a good train"},
    {image: 'assets/images/image2.jpg', title: 'Street', desctiption: 'This is a good place '},

  ]
};

