// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { HttpClientModule } from "@angular/common/http";
// import { AsyncValidator, FormControl } from "@angular/forms";
// import { Observable, catchError, map, of } from "rxjs";

// import { ValidationErrors } from "@angular/forms";

// @Injectable({
//   providedIn: 'root'
// })
// export class UniqueUsername implements AsyncValidator {
//   constructor(private http: HttpClient) { }

//   validate = (control: any): Observable<ValidationErrors | null> => {
//     const { value } = control

//     return this.http.post<any>('https://api.angular-email.com/auth/username', {
//       username: value
//     })
//       .pipe(
//         map((value): any => {
//           if (value.available) {
//             return null;
//           }
//         }),
//         catchError((err) => {
//           // console.log(err);
//           if (err.message.username) {
//             return of({ noConection: true })

//           } else {
//             return of({ nonUniqueUsername: true })


//           }
//         })
//       )


//   }

// }
