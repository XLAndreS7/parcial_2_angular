import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarios: Usuario[] = [
    { email: 'parcial21@eam.edu.co', password: '123456' }
  ];

  login(email: string, password: string): boolean {
    const user = this.usuarios.find(u => u.email === email && u.password === password);
    if (user) {
      // Autenticación exitosa
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }
}

