import { Observable } from "rxjs";

export abstract class AbstractAuthService {

    //MÉTODOS BÁSICOS
    abstract login(email: string, password: string, rol: string): Observable<any>;
    abstract registro(nombre: string, email: string, password: string): Observable<any>;
    abstract logout(): void;

    //CONSULTAS
    abstract isAuthenticated(): boolean;
    abstract isLoggedIn(): boolean;

}