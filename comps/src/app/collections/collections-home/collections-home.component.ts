import { Component, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from '../table/table.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [SharedModule, TableComponent,RouterModule, TabsComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})

export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Alex', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 25, job: 'Engineer' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]
};


