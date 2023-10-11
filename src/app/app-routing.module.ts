import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListComponent } from './citas-list/citas-list.component';
import { AsignarCitaComponent } from './asignar-cita/asignar-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path: '',
    component: LoginComponent,
},
    { path: 'citas/asignar', component: AsignarCitaComponent },
    { path: 'citas/listar', component: CitasListComponent },
    { path: 'citas/editar/:cedula', component: EditarCitaComponent },
    { path: 'buscar', component: BuscarComponent },
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
