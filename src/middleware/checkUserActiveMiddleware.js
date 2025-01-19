import { checkUserActive } from '../models/MySQL/userModel.js'

// Verificar si el usuario está activo
export const checkUserActiveMiddleware = async (req, res, next) => {
    const userId = req.userId; // Suponiendo que el userId ya está disponible desde el token
    try {
        const isActive = await checkUserActive(userId);
        if (!isActive) {
            return res.status(403).json({ message: 'Usuario inactivo. Acceso denegado.' });
        }
        next(); // Si está activo, pasa al siguiente middleware o controlador
    } catch (error) {
        console.error('Error al verificar el estado del usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
