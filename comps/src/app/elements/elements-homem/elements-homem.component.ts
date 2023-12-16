import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component'
import { DividerComponent } from '../../shared/divider/divider.component';
import { SegmentComponent } from '../segment/segment.component';

@Component({
  selector: 'app-elements-homem',
  standalone: true,
  imports: [PlaceholderComponent, DividerComponent, SegmentComponent],
  templateUrl: './elements-homem.component.html',
  styleUrl: './elements-homem.component.css'
})
export class ElementsHomemComponent {

}
