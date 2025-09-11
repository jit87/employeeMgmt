import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { AbstractAsistenciaService } from './abstracts/AbstractAsistenciaService';
import { AsistenciaService } from './services/asistencia.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: AbstractAsistenciaService,
      useClass: AsistenciaService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
