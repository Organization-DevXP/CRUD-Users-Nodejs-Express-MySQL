// ./src/services/userService.js

import { deleteUserModel, getAllUsersModel, getUserByIdModel, updateUserModel, restoreUserModel } from '../models/MySQL/userModel.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { generateAuthToken } from '../utils/jwt.js'; 

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
