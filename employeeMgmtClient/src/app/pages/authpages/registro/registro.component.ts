import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractAuthService } from '../../../abstracts/AbstractAuthService';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  registroForm: FormGroup;
  error: boolean = false;
  correcto: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _authService: AbstractAuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (this.registroForm.valid) {
      const { nombre, email, password } = this.registroForm.value;
      this._authService.registro(nombre, email, password).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error('Error durante el registro:', error);
          this.error = true;
        }
      );
    }
  }



}