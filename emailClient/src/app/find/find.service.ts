import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetfinderService {
  private apiUrl = 'https://api.petfinder.com/v2';

  private clientId = 'H5hkIxhiX1aofnKGM7GsDjhPOW0ZCW4bpDmFLuJvFOBLSPSuCv';
  private clientSecret = 'KCfv1JArVkS2VQ7mOpdnTgT6OAGq9Tl9oy3sh0c1';
  private accessToken: string | null = null;

   animals: any[] = [];

  setAnimals(animals: any[]) {
    this.animals = animals;
  }


  constructor(private http: HttpClient) {}

  // Method to get the access token
  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

    return this.http.post(this.apiUrl + '/oauth2/token', body, { headers });
  }

  // Method to make authorized requests
  makeAuthorizedRequest(method: string, endpoint: string, params: any = {},): Observable<any> {
    // Check if the access token is available, if not, fetch it
    if (!this.accessToken) {
      return this.getToken().pipe(
        switchMap((response) => {
          this.accessToken = response['access_token'];
          return this.makeRequest(method, endpoint, params);
        })
      );
    } else {
      return this.makeRequest(method, endpoint, params);
    }
  }

  private makeRequest(method: string, endpoint: string, params: any): Observable<any> {

    // Set the request headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`,
    });

    // Set the request parameters
    const httpParams = new HttpParams({ fromObject: params });

    // Make the authorized request
    return this.http.request(method, `${this.apiUrl}/${endpoint}`, { headers, params: httpParams });
  }


  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
  }
  getAnimals() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(`${this.apiUrl}/animals`, {headers})
  }

  getAnimalTypes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(`${this.apiUrl}/types`, {headers})
  }



  getBreeds(type: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(`https://api.petfinder.com/v2/types/${type}/breeds`,  {headers})
  }

  getGivenAnimals(type: string = '', color: string = '', gender: string = '', breed: string = '') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });

    let apiUrl = `${this.apiUrl}/animals`;

    // Check if any parameters are provided and append them to the URL
    const queryParams: string[] = [];

    if (type) {
      queryParams.push(`type=${type}`);
    }

    if (color) {
      queryParams.push(`color=${color}`);
    }

    if (gender) {
      queryParams.push(`gender=${gender}`);
    }

    if (breed) {
      queryParams.push(`breed=${breed}`);
    }

    // Append the query parameters to the existing URL
    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join('&')}`;
    }

    console.log('Constructed URL:', apiUrl); // Log the constructed URL

    return this.http.get(apiUrl, { headers });
  }


}
