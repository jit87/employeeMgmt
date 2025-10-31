export class UsuarioModel {
  _id?: string;
  nombre: string;
  email: string;
  contraseña: string;
  rol: 'empleado' | 'admin';

  constructor(nombre: string, email: string, contraseña: string, rol: 'empleado' | 'admin') {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.rol = rol;
  }
}
