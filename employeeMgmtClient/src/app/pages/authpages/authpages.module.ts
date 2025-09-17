import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AbstractAuthService } from '../../abstracts/AbstractAuthService';
import { AuthService } from '../../services/auth.service';


@NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        LoginComponent,
        RegistroComponent
    ],
    providers: [
        {
            provide: AbstractAuthService,
            useClass: AuthService
        }
    ],
    bootstrap: [AppComponent]
})
export class AuthpagesModule { }
