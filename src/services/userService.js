// ./src/services/userService.js

import { createUserModel, getUserByEmail, deleteUserModel, getAllUsersModel, getUserByIdModel, updateUserModel, restoreUserModel } from '../models/MySQL/userModel.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { generateAuthToken } from '../utils/jwt.js'; 

// Crear un nuevo usuario
export const createUser = async (username, email, password) => {
    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }

    // Cifrar la contraseña
    const hashedPassword = await hashPassword(password);

    // Guardar el nuevo usuario en la base de datos
    return await createUserModel(username, email, hashedPassword);
};

// Iniciar sesión de un usuario
export const loginUser = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) {
        return null;
    }

    // Comparar la contraseña
    const isMatch = await comparePassword(password, user.password);
    if (isMatch) {
        return user;
    }

    return null;
};

// Obtener todos los usuarios
export const getAllUsersService = async () => {
    return await getAllUsersModel();
};

// Obtener usuario por ID
export const getUserByIdService = async (id) => {
    return await getUserByIdModel(id);
};

// Actualizar usuario
export const updateUserService = async (id, username, email, password) => {
    const passwordHash = await hashPassword(password);
    return await updateUserModel(id, username, email, passwordHash);
};

// Eliminar usuario
export const deleteUserService = async (id) => {
    return await deleteUserModel(id);
};

export const restoreUserService = async (id) => {
    return await restoreUserModel(id);
};

// Generar el token JWT (ya no es necesario redefinir la función)
export const generateAuthTokenForUser = (userId) => {
    return generateAuthToken(userId);  // Usar la función importada
};
