import { Injectable } from '@angular/core';
import { Cita } from './cita'; // Asegúrate de que la ruta sea correcta
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitaService {
  
  private apiUrl = 'https://app.gosummus.com/testing/api';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post(loginUrl, credentials);
  }

  agregarCita(citaData: any): Observable<any> {
    const url = `${this.apiUrl}/cita`; // URL del servicio para agregar citas
    return this.http.post(url, citaData);
  }

  listarCitas(): Observable<any> {
    const url = `${this.apiUrl}/citas`; // URL del servicio para listar citas
    return this.http.get(url);
  }

  editarCita(citaData: any): Observable<any> {
    const url = `${this.apiUrl}/cita`; // URL del servicio para editar una cita
    return this.http.put(url, citaData);
  }

buscarCitasPorNombre(nombre: string): Observable<any> {
  const url = `https://app.gosummus.com/testing/api/cita/${nombre}`;
  return this.http.get(url);
}
}

 


