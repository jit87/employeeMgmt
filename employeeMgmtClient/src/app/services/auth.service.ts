import { Injectable } from '@angular/core';
import { AbstractAuthService } from '../abstracts/AbstractAuthService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractAuthService {

  public override authUrl = 'http://localhost:4000'; //Esta URL tiene que coincidir con la que tenemos configurada en el backend en index.js: en la función app.listen(4000, () => {})
  private tokenKey = 'auth-token';

  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super();
  }


  //MÉTODOS BÁSICOS
  login(email: string, password: string, rol: string): Observable<any> {
    console.log('Iniciando login...');
    return this.http.post<any>(`${this.authUrl}/login`, { email, password, rol }).pipe(
      tap(response => {
        console.log('Login existoso, guardando token y navegando...');

        //Guardamos el token, el email y el rol en el localStorage
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem('email', email);
        localStorage.setItem('rol', rol);

        //Accedemos al contenido principal
        this.router.navigate(['/contenido']).then(() => {
          console.log('Navegación a /contenido exitosa');
        }).catch(err => {
          console.error('Navegacion error:', err);
        });
      }),

      catchError((error: any) => {
        console.error('Error durante login', error);
        return throwError(error);
      })
    );

  }


  registro(nombre: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/registro`, {
      nombre,
      email,
      password
    }).pipe(
      tap(response => {
        console.log('Registro exitoso:', response);
      }),
      catchError(error => {
        console.error('Error durante el registro:', error);
        return throwError(error);
      })
    );
  }



  logout(): void {
    localStorage.removeItem(this.tokenKey);
    //Volvemos a login si salimos
    this.router.navigate(['/login']);
  }




  //CONSULTAS
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth-token');
  }





}
