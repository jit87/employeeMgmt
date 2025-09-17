import express from 'express';
import dotenv from 'dotenv';
import { registro, login } from '../controllers/authController.js';

dotenv.config();

const router = express.Router();


router.post('/registro', registro);

router.post('/login', login);

export default router; 