import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  nombre: string = ''; // Nombre a buscar
  citasEncontradas: Cita[] = []; // Cambia el tipo según tu modelo de Cita

  constructor(private citaService: CitaService) {}

  buscarCitas() {
    this.citaService.buscarCitasPorNombre(this.nombre)
      .subscribe(
        (citas: Cita[]) => {
          this.citasEncontradas = citas;
        },
        (error) => {
          console.error('Error al buscar citas:', error);
        }
      );
  }
}









