export class FichajeModel {
    _id?: string;
    _idUsuario?: string;
    nombre: string;
    email: string;
    entrada: Date;
    salida: Date;
    fecha: Date;

    constructor(
        nombre: string,
        email: string,
        entrada: Date,
        salida: Date,
        fecha: Date
    ) {
        this.nombre = nombre;
        this.email = email;
        this.entrada = entrada;
        this.salida = salida;
        this.fecha = fecha;
    }

}