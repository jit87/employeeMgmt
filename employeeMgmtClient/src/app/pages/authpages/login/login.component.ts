import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractAuthService } from '../../../abstracts/AbstractAuthService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _authService: AbstractAuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rol: ['user', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, rol } = this.loginForm.value;
      this._authService.login(email, password, rol).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error durante el login:', error);
          this.error = true;
        }
      )
    }
  }


}