// ./src/controllers/userController.js

import { createUser, loginUser, deleteUserService, getAllUsersService, getUserByIdService, updateUserService, restoreUserService } from '../services/userService.js';
import { registerUserSchema, loginUserSchema, updateUserSchema } from '../utils/validate.js';
import { generateAuthToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
    try {
        const parsedData = registerUserSchema.parse(req.body);
        const { username, email, password } = parsedData;

        const newUser = await createUser(username, email, password);

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.errors.map(err => ({
                field: err.path[0],
                message: err.message,
            }));
            res.status(400).json({ errors: formattedErrors });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export const loginUserController = async (req, res) => {
    try {
        const parsedData = loginUserSchema.parse(req.body);

        const { email, password } = parsedData;

        // Autenticación del usuario
        const user = await loginUser(email, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generación del token JWT
        const token = await generateAuthToken(user.id, user.role);

        // Respuesta exitosa con token
        res.status(200).json({
            message: 'Login successful',
            token,
            user: { id: user.id, username: user.username, email: user.email, rol: user.role, coins: user.coins }
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.errors.map(err => ({
                field: err.path[0],
                message: err.message,
            }));
            res.status(400).json({ errors: formattedErrors });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar si el id en la URL coincide con el userId del token       
        if (id !== req.userId.toString()) {
            return res.status(403).json({ message: 'No tienes permiso para eliminar este usuario.' });
        }
        const user = await getUserByIdService(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        // Validar los datos de entrada con Zod
        const validatedData = updateUserSchema.parse(req.body);

        // Realizar la actualización
        const updated = await updateUserService(id, validatedData.username, validatedData.email, validatedData.password);

        if (!updated) {
            return res.status(404).json({ message: 'Usuario no encontrado para actualizar' });
        }
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.errors.map(err =>
            ({
                field: err.path[0],
                message: err.message,
            }));
            res.status(400).json({
                errors:
                    formattedErrors
            });
        } else {
            res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar si el id en la URL coincide con el userId del token
        if (id !== req.userId.toString()) {
            return res.status(403).json({ message: 'No tienes permiso para eliminar este usuario.' });
        }
        const deleted = await deleteUserService(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Usuario no encontrado para eliminar' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const restoreUser = async (req, res) => {
    try {
        const { id } = req.params;
        const restored = await restoreUserService(id);
        if (!restored) {
            return res.status(404).json({ message: 'Usuario no encontrado para restaurar' });
        }
        res.status(200).json({ message: 'Usuario restaurado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
