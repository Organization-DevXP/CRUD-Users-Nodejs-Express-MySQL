import { createUserModel, getUserByEmail } from '../models/MySQL/userModel.js'
import { comparePassword } from '../utils/bcrypt.js';

// Crear un nuevo usuario
export const createUser = async (username, email,
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
export const loginUser = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) {
        return null;
    }

    // Comparar la contraseña
    const isMatch = await comparePassword(password, user.
        password);
    if (isMatch) {
        return user;
    }

    return null;
};