// cita.model.ts

export class Cita {
    cedula: string;
    nombre: string;
    fecha: Date;
    hora: string;
    observaciones: string;
  
    constructor(cedula: string, nombre: string, fecha: Date, hora: string, observaciones: string) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.fecha = fecha;
      this.hora = hora;
      this.observaciones = observaciones;
    }
  }
  
