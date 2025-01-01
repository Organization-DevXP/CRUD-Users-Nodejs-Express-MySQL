// ./src/app.js

import express from 'express';
import dotenv from 'dotenv';

// Import Routes
import userRoutes from './routes/userRoutes.js';

// Configuracion                 
dotenv.config();
const app = express();
app.use(express.json());

// Swagger
import setupSwaggerV1 from '../swagger/v1/main.js';
setupSwaggerV1(app);

// Morgan
import morgan from 'morgan';
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Routes
app.use('/api/v1/users', userRoutes);

export default app;
