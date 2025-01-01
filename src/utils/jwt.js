// ./src/utils/jwt.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Generar el token JWT
export const generateAuthToken = (userId, userRol) => {
    const payload = { userId, userRol };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Verificar el token JWT
export const verifyAuthToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};
