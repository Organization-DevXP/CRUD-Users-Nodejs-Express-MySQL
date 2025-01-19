// ./src/server.js

import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './config/connectMySQL.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Conectar a la base de datos
connectDB();

// Arrancar el servidor
app.listen(PORT, () => {
  console.log('\n==================================================');
  console.log(`🚀 Servidor corriendo en: http://${HOST}:${PORT}`);
  console.log(`📃 Swagger Docs: http://${HOST}:${PORT}/api-docs`);
  console.log('==================================================\n');
});


