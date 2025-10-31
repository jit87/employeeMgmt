import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import { registrarHoraEntradaFichaje, registrarHoraSalidaFichaje } from '../controllers/asistenciaContoller.js';

const router = Router();

//Autenticamos todas las rutas
router.use(authenticate);

//Ruta para añadir la hora en que ficha el empleado
router.post("/", registrarHoraEntradaFichaje);

//Ruta para añadir la hora en que termina el empleado
router.post("/", registrarHoraSalidaFichaje); 