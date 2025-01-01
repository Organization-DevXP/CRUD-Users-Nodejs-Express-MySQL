// ./src/config/db.js

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        // Usamos el pool para hacer una consulta
        const [rows] = await pool.query('SELECT 1');  // Consulta simple para probar la conexión
        console.log('✅ Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos', error);
        throw error;  // Lanzamos el error para que no se ejecute el servidor si hay un fallo
    }
};

export { connectDB, pool };