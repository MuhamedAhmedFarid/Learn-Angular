import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, SearchBarComponent, PageListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wsearch';
  pages = []

  constructor(private wikipedia: WikipediaService){ }

  onTerm(term: String){
    this.wikipedia.search(term).subscribe((res :any) => {
      this.pages = res.query.search
      console.log(this.pages);


    })

  }
}
