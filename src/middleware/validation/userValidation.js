import { usernameValidation, emailValidation, passwordValidation } from './fieldsValidation.js';

// Validaciones para registrar un usuario
export const validateRegisterUser = [
    usernameValidation,
    emailValidation,
    passwordValidation,
];

// Validaciones para iniciar sesión de un usuario
export const validateLoginUser = [
    emailValidation,
    passwordValidation,
];
