import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AbstractAuthService } from '../abstracts/AbstractAuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AbstractAuthService, private router: Router) { }

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}