import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia.component';
import { AsistenciaRoutingModule } from './asistencia-routing.module';



@NgModule({
  declarations: [AsistenciaComponent],
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ]
})
export class AsistenciaModule { }
