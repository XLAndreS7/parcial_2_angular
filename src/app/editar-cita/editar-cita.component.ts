import { Component } from '@angular/core';
import { Cita } from '../cita'; // Asegúrate de que la ruta sea correcta
import { CitaService } from '../cita-service.service';
@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent {
  cita: Cita;

  constructor(private citaService: CitaService) {
    // Inicializamos 'cita' con valores predeterminados
    this.cita = new Cita(
      '123456789', // Cédula
      'Nombre del Paciente', // Nombre
      new Date(), // Fecha (puedes ajustar la fecha según tus necesidades)
      '14:30', // Hora
      'Observaciones adicionales' // Observaciones
    );
  }
  guardarCambios() {
    this.citaService.agregarCita;
  }

  // Resto de la lógica del componente
}

