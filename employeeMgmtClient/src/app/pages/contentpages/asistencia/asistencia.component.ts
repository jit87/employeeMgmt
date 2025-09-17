import { Component } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { Form, NgForm } from '@angular/forms';
import { AbstractAsistenciaService } from '../../../abstracts/AbstractAsistenciaService';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrl: './asistencia.component.css'
})
export class AsistenciaComponent {

  public horaActual: number;

  constructor(private _asistenciaService: AbstractAsistenciaService) {
    this.horaActual = 0;
  }


  //Rejoj
  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription: Subscription | undefined;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }



  fichar(time: any) {
    console.log("Hora: ", time);
    this._asistenciaService.setEntrada().subscribe(
      {
        next: (resp) => {
          console.log(resp);
        },
        error: (error) => console.error(error)
      }
    )
  }


  desconectar(time: any) {
    console.log("Hora: ", time);
  }



  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
