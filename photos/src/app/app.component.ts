import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PhotoShowComponent } from './photo-show/photo-show.component';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, PhotoShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  urls = ''
  constructor(private photoService: PhotosService) {
    this.photoService.getPhoto().subscribe((res : any)  => {
      this.urls = res.urls.regular

    })
  }

  title = 'photos';
}
