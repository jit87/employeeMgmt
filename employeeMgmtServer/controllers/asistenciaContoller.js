import Fichaje from "../models/Fichaje";
import Usuario from "../models/Usuario";


export async function registrarHoraEntradaFichaje(req, res) {

    const { _idUsuario, nombre, email, entrada, fecha } = req.body;

    const nuevoFichaje = new Fichaje({
        _idUsuario,
        nombre,
        email,
        entrada,
        fecha
    })

    try {
        const fichaje = await Fichaje.findOne({
            _idUsuario: _idUsuario,
            fecha: fecha,
        });
        if (fichaje) {
            return res.status(400).json({ message: "Ya has fichado la entrada hoy." });
        }
        const fichajeGuardado = await nuevoFichaje.save();
        res.status(201).json(fichajeGuardado);

    } catch {
        res.status(400).json({ message: err.message });
    }

}

export async function registrarHoraSalidaFichaje(req, res) {

    try {

    } catch {

    }

}