import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = ''
  @Input() control : any = new FormControl()
  @Input() textType: string = ''
  @Input() placeholder: string = ''

  showErrors() {
    const { dirty, touched, errors } = this.control
    return dirty && touched && errors
  }
}
