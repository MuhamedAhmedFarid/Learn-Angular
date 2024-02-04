import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathPassword } from '../validators/math-password';
// import { UniqueUsername } from '../validators/unique-username';
import { AsyncValidator } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      // Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    // [this.uniqueUsername.validate]
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, { validators: [this.mathPassword.validate] });

  name: string = ''
  constructor(
    private mathPassword: MathPassword,
    // private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    // console.log('Form state:', this.authForm);
    if (this.authForm.invalid) {
      // console.log('Form is invalid');
      return;
    }

    console.log('Form is valid. Calling signup...');
    this.authService.signup(this.authForm.value)
      .subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          this.router.navigateByUrl('search');
        },
        error: (err) => {
          console.error('Signup error:', err);
          if (!err.status) {
            console.log('No connection error');
            this.authForm.setErrors({ noConnection: true });
          } else {
            console.log('Unknown error');
            this.authForm.setErrors({ unKnownError: true });
          }
        }
      });
  }


}
