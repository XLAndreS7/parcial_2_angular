import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita-service.service';
import { Cita } from '../cita';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
})
export class CitasListComponent implements OnInit {
  citas: any[] = []; // Define the 'citas' property as an array of objects

  constructor(private citasService: CitaService) {}

  editarCita() {
    this.citasService.editarCita;
  }

  ngOnInit() {
    // Fetch citas data from your service and assign it to the 'citas' property
    this.citasService.listarCitas().subscribe(
      (response: any[]) => {
        this.citas = response;
      },
      (error) => {
        console.error('Error fetching citas:', error);
      }
    );
  }
  
}

