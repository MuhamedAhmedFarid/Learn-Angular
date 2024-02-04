// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable, switchMap } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class PetfinderService {
//   private apiUrl = 'https://api.petfinder.com/v2';
//   private clientId = 'H5hkIxhiX1aofnKGM7GsDjhPOW0ZCW4bpDmFLuJvFOBLSPSuCv';
//   private clientSecret = 'KCfv1JArVkS2VQ7mOpdnTgT6OAGq9Tl9oy3sh0c1';
//   private accessToken: string | null = null;

//   constructor(private http: HttpClient) {}

//   // Method to get the access token
//   getToken(): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/x-www-form-urlencoded',
//     });

//     const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

//     return this.http.post(this.apiUrl + '/oauth2/token', body, { headers });
//   }

//   // Method to make authorized requests
//   makeAuthorizedRequest(method: string, endpoint: string, params: any = {}): Observable<any> {
//     // Check if the access token is available, if not, fetch it
//     if (!this.accessToken) {
//       return this.getToken().pipe(
//         switchMap((response) => {
//           this.accessToken = response['access_token'];
//           return this.makeRequest(method, endpoint, params);
//         })
//       );
//     } else {
//       return this.makeRequest(method, endpoint, params);
//     }
//   }

//   private makeRequest(method: string, endpoint: string, params: any): Observable<any> {
//     // Set the request headers
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.accessToken}`,
//     });

//     // Set the request parameters
//     const httpParams = new HttpParams({ fromObject: params });

//     // Make the authorized request
//     return this.http.request(method, `${this.apiUrl}/${endpoint}`, { headers, params: httpParams });
//   }
// }
