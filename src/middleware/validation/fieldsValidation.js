import { body, check } from 'express-validator';

export const usernameValidation = body('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres.');

export const emailValidation = body('email')
    .notEmpty().withMessage('El correo electrónico no puede estar vacío.')
    .isEmail().withMessage('El correo electrónico debe tener un formato válido.');

export const passwordValidation = body('password')
    .notEmpty().withMessage('La contraseña no puede estar vacía.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.');
