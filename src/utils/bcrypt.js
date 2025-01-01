// ./src/utils/bcryp.js

import bcrypt from 'bcryptjs';

// Cifrar la contraseña
export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

// Comparar la contraseña con el hash
export const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};
