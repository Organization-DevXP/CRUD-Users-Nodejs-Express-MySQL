// 

import express from 'express';
import {
    registerUser, loginUserController
} from
    '../controllers/authController.js';

// Middlewares
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validateRegisterUser, validateLoginUser } from
    '../middleware/validation/userValidation.js';

const router = express.Router();

router.post('/register', validateRegisterUser,
    handleValidationErrors, registerUser);
router.post('/login', validateLoginUser,
    handleValidationErrors, loginUserController);
router.post('/logout', (req, res) => {
    res.status(200).json({
        message: 'Logout successful'
    });
});

export default router;
