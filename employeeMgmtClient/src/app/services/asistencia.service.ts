import { Injectable } from '@angular/core';
import { AbstractAsistenciaService } from '../abstracts/AbstractAsistenciaService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService extends AbstractAsistenciaService {


  url: string = "http://localhost:4000";

  constructor() {
    super();
  }

  setEntrada(): Observable<string> {
    throw new Error('Method not implemented.');
  }
  setSalida(): Observable<string> {
    throw new Error('Method not implemented.');
  }


}
