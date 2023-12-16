import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
interface TableData {
  name: string;
  age: string;
  job: string;
}

interface TableHeader {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() classNames = '';


  @Input() data: any = [];
  @Input() headers: TableHeader[] = [];
}

