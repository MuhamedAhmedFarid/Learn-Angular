import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  })
  constructor(private authservice: AuthService, private router: Router) {}

  onSubmit() {
    if(this.authForm.invalid) {
      return;
    }
    this.authservice.signin(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('home')
      },
      error: ({error}) => {
        console.log(error);

        if(error.username || error.password) {
          this.authForm.setErrors({credential: true})
        }
      }
    })

  }
}

