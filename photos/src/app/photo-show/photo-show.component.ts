import { Component, Input } from '@angular/core';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-photo-show',
  standalone: true,
  imports: [],
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {
  @Input() urls = '';
  constructor(private photoService: PhotosService) {
    this.photoService.getPhoto().subscribe((res : any)  => {
      this.urls = res.urls.regular

    })
  }
  onClick() {
    this.photoService.getPhoto().subscribe((res : any) => {
      this.urls = res.urls.regular
    })
  }
}
