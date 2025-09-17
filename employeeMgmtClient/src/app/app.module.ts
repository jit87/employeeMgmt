import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { AbstractAsistenciaService } from './abstracts/AbstractAsistenciaService';
import { AsistenciaService } from './services/asistencia.service';
import { AbstractAuthService } from './abstracts/AbstractAuthService';
import { AuthService } from './services/auth.service';
import { AuthpagesModule } from './pages/authpages/authpages.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AuthpagesModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AbstractAuthService,
      useClass: AuthService
    },
    {
      provide: AbstractAsistenciaService,
      useClass: AsistenciaService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
