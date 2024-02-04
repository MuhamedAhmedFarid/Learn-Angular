import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';


interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string ;
  password: string;
  passwordConfirmation: string;
}


interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SigninResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  rootUrl = 'https://api.angular-email.com'
  signedin$ = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }


  signup(credentials: any) {
    return this.http.post<any>(
      `${this.rootUrl}/auth/signup` , credentials, {
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        this.signedin$.next(true)
      })
    )
  }
  checkAuth() {
    return this.http
    .get<any>(`${this.rootUrl}/auth/signedin`, {
      withCredentials: true
    })
    .pipe(
      tap(( {authenticated} ) => {
        this.signedin$.next(authenticated)
      })
    )
  }
  signout() {
    return this.http.post<any>(`${this.rootUrl}/auth/signout`, {}, {
      withCredentials: false
    })
    .pipe(
      tap(({authenticated}) => {
        this.signedin$.next(authenticated)
      })
    )


  }

  signin(credentials: any) {
    return this.http.post<any>(`${this.rootUrl}/auth/signin`, credentials, {
      withCredentials : true
    })
    .pipe(
      tap(() => {
        this.signedin$.next(true)
      })
    )
  }
}
