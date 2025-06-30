import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionesComponent } from './peticiones.component';
import { PeticionesRoutingModule } from './peticiones-routing.module';



@NgModule({
  declarations: [PeticionesComponent],
  imports: [
    CommonModule,
    PeticionesRoutingModule
  ]
})
export class PeticionesModule { }
