export class Fichaje {
    _id?: string;
    nombre: string;
    email: string;
    timestamp: string;

    constructor(
        nombre: string,
        email: string,
        timestamp: string
    ) {
        this.nombre = nombre;
        this.email = email;
        this.timestamp = timestamp;
    }
}