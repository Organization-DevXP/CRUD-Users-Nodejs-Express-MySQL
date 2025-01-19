import { createUserModel, getUserByEmail, logoutUserModel } from '../models/MySQL/userModel.js'
import { comparePassword, hashPassword } from '../utils/bcrypt.js';

// Crear un nuevo usuario
export const createUserService = async (username, email,
    password) => {
    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }

    // Cifrar la contraseña
    const hashedPassword = await hashPassword(password);

    // Guardar el nuevo usuario en la base de datos
    return await createUserModel(username, email,
        hashedPassword);
};

// Iniciar sesión de un usuario
export const loginUserService = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) {
        return null;
    }

    // Comparar la contraseña
    const isMatch = await comparePassword(password, user.
        password);
    if (isMatch) {
        const state = true;
        await logoutUserModel(user.id, state);
        return user;
    }

    return null;
};

export const logoutUserService = async (userId) => {
    try {
        const state = false;
        const success = await logoutUserModel(userId, state);
        if (!success) {
            throw new Error('No se pudo cerrar sesión; el usuario no existe o ya estaba inactivo.');
        }
    } catch (error) {
        console.error('Error in logoutUserService');
        throw error;
    }
};