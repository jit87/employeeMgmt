import { Observable } from "rxjs";

export abstract class AbstractAsistenciaService {

    abstract setEntrada(): Observable<string>;
    abstract setSalida(): Observable<string>;

}