import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

//Inicializa la aplicación de Express
const app = express();

//Habilita middleware para parsear JSON
app.use(express.json());

//Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};
app.use(cors(corsOptions));

//Rutas
//Registra el enrutador para la ruta de autenticación 
app.use('/', authRoutes);



export default app; 