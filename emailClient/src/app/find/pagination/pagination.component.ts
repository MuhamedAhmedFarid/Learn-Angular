import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() limit: number = 10;
  @Input() total: number = 0;
  @Output() changePage = new EventEmitter<number>();

  get pages(): number[] {
    const pageCount = Math.ceil(this.total / this.limit);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

}
