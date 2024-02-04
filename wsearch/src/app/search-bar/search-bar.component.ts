import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<String>();
  term = '';

  onInput(event: any) {
    this.term = event.target.value
  }

  onFormSubmit(event : any) {
    event.preventDefault()
    this.submitted.emit(this.term)
  }
}
