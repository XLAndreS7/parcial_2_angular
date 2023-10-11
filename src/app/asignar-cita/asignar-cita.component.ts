import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita-service.service';

@Component({
  selector: 'app-asignar-cita',
  templateUrl: './asignar-cita.component.html',
  styleUrls: ['./asignar-cita.component.css']
})
export class AsignarCitaComponent {
  cita: Cita;



  constructor(private citaService: CitaService) {
     // Inicializamos 'cita' con valores predeterminados
     this.cita = new Cita(
      '123456789', // Cédula
      'Nombre del Paciente', // Nombre
      new Date(), // Fecha (puedes ajustar la fecha según tus necesidades)
      '14:30', // Hora
      'Observaciones adicionales' // Observaciones
  )}

  guardarCita() {
    this.citaService.agregarCita;
  }

  
}
