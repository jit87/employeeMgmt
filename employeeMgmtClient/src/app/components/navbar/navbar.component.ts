import { Component } from '@angular/core';
import { AbstractAuthService } from '../../abstracts/AbstractAuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  autenticado: boolean | any = false;
  isAuthenticated: boolean = false;

  constructor(private _authService: AbstractAuthService) {
    if (this._authService.isAuthenticated()) {
      this.autenticado = true;
    }
  }


}
