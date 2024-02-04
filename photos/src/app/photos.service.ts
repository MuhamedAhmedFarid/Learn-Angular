import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }


  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID jgcli15ejurbTmgFpNldUi6VyphyHFNgm8dLMyFLGdw'
      }
    } )
  }
}
