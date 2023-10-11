import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de agregar esta línea
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CitasListComponent } from './citas-list/citas-list.component';
import { AsignarCitaComponent } from './asignar-cita/asignar-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


  
 

  @NgModule({
    declarations: [
      
      AppComponent,
      LoginComponent,
      MainComponent,
      CitasListComponent,
      AsignarCitaComponent,
      EditarCitaComponent,
      BuscarComponent,
      
    ],
    imports: [
      BrowserModule,
      FormsModule, 
      HttpClientModule,
      RouterModule,
      MatSidenavModule,
      MatListModule,
      BrowserAnimationsModule,

     
      
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }