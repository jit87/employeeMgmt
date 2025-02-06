import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './contentpages/home/home.component';
import { EmpleadosComponent } from './contentpages/empleados/empleados.component';
import { AsistenciaComponent } from './contentpages/asistencia/asistencia.component';
import { PeticionesComponent } from './contentpages/peticiones/peticiones.component';
import { NoticiasComponent } from './contentpages/noticias/noticias.component';



@NgModule({
  declarations: [
    HomeComponent,
    EmpleadosComponent,
    AsistenciaComponent,
    PeticionesComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
