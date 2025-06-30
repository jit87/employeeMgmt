import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
