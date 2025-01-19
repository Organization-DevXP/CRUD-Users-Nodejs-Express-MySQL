import { createUserService, loginUserService, logoutUserService } from '../services/authService.js'

import { generateAuthToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = await createUserService(username,
            email, password);

        res.status(201).json({
            message: 'User created successfully', user: newUser
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(422).json({
                message: 'Validation error',
                errors: error.errors
            });
        }
        // Manejo de errores desconocidos
        console.error('Error in registerUser:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Autenticación del usuario
        const user = await loginUserService(email, password);
        if (!user) {
            return res.status(401).json({
                message:
                    'Invalid credentials'
            });
        }
        // Generación del token JWT
        const token = await generateAuthToken(user.id,
            user.role);
        // Respuesta exitosa con token
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id, username: user.
                    username, email: user.email, rol: user.role,
                coins: user.coins
            }
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(422).json({
                message: 'Validation error',
                errors: error.errors
            });
        }
        // Manejo de errores desconocidos
        console.error('Error in registerUser:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export const logoutUserController = async (req, res) => {
    try {
        const userId = req.userId;
        logoutUserService(userId);
        return res.status(200).json({ message: 'Sesión cerrada exitosamente.' });
    } catch (error) {
        console.error('Error in logoutUserController:', error.message);
        return res.status(500).json({ message: 'Error al cerrar sesión.', error: error.message });
    }
};