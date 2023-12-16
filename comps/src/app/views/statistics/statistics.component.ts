import { Component, Input, } from '@angular/core';
import { DividerComponent } from '../../shared/divider/divider.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [DividerComponent, CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  @Input() data: { value: number; label: string; }[] = [];
}
