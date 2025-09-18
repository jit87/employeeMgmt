import { Observable } from "rxjs";

export abstract class AbstractAuthService {

    authUrl: string = "";

    //MÉTODOS BÁSICOS
    abstract login(email: string, password: string, rol: string): Observable<any>;
    abstract registro(nombre: string, email: string, password: string): Observable<any>;
    abstract logout(): void;

    //CONSULTAS
    abstract getToken(): string | null
    abstract isAuthenticated(): boolean;
    abstract isLoggedIn(): boolean;

}