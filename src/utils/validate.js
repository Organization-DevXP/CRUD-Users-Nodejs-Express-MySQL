import { body } from 'express-validator';

export const registerUserValidation = [
    body('username')
        .trim()
        .notEmpty().withMessage('El nombre de usuario no puede estar vacío.')
        .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres.'),
    body('email')
        .trim()
        .notEmpty().withMessage('El correo electrónico no puede estar vacío.')
        .isEmail().withMessage('El correo electrónico debe tener un formato válido.'),
    body('password')
        .trim()
        .notEmpty().withMessage('La contraseña no puede estar vacía.')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];

export const loginUserValidation = [
    body('email')
        .trim()
        .notEmpty().withMessage('El correo electrónico no puede estar vacío.')
        .isEmail().withMessage('El correo electrónico debe tener un formato válido.'),
    body('password')
        .trim()
        .notEmpty().withMessage('La contraseña no puede estar vacía.')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];

export const updateUserValidation = [
    body('username')
        .optional()
        .trim()
        .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres.'),
    body('email')
        .optional()
        .trim()
        .isEmail().withMessage('El correo electrónico debe tener un formato válido.'),
    body('password')
        .optional()
        .trim()
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];
