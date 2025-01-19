import { body } from 'express-validator';

export const usernameValidationUpdate = body('username')
    .optional()
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres.');

export const emailValidationUpdate = body('email')
    .optional()
    .notEmpty().withMessage('El correo electrónico no puede estar vacío.')
    .isEmail().withMessage('El correo electrónico debe tener un formato válido.');

export const passwordValidationUpdate = body('password')
    .optional()
    .notEmpty().withMessage('La contraseña no puede estar vacía.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.');
