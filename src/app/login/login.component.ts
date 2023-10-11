import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/main']);
    } else {
      alert('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }
}

