import { Component } from '@angular/core';
import { HeaderComponent } from '../../pages/header/header.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string = '';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe((res) => {
      console.log('this is the userName',res.username);
      this.username = res.username

    })
  }
}
