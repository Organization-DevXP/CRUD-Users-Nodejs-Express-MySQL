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
        // Categorizar y manejar errores específicos
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('❌ Error: Credenciales inválidas para la base de datos');
        } else if (error.code === 'ENOTFOUND') {
            console.error('❌ Error: No se pudo encontrar el host de la base de datos');
        } else if (error.code === 'ECONNREFUSED') {
            console.error('❌ Error: Conexión rechazada, revisa si el servidor está activo');
        } else {
            console.error('❌ Error desconocido al conectar con la base de datos:', error.message);
        } 
    }
};

export { connectDB, pool };