import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia.component';
import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AsistenciaComponent],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    FormsModule
  ]
})
export class AsistenciaModule { }
