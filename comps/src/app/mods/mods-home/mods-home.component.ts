import { Component } from '@angular/core';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [DividerComponent,ModalComponent, CommonModule, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

  openModal = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange taste like an oreange' },
    { title: 'What color is that cat', content: 'The cat is an orange color' }
  ]

  onClick() {
    this.openModal = !this.openModal
  }

}
