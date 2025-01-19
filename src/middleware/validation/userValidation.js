import { usernameValidation, emailValidation, passwordValidation } from './fieldsValidation.js';

import { emailValidationUpdate, passwordValidationUpdate, usernameValidationUpdate } from './validateUpdateUser.js';


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

// Validaciones para actualizar un usuario
export const validateUpdateUser = [
    usernameValidationUpdate,
    emailValidationUpdate,
    passwordValidationUpdate,
];
