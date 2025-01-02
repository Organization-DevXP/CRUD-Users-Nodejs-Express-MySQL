// ./src/routes/userRoutes.js

import express from 'express';
import { registerUser, loginUserController, deleteUser, getAllUsers, getUserById, updateUser, restoreUser } from '../controllers/userController.js';

// Middlewares
import { authenticateToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validateRegisterUser, validateLoginUser } from '../middleware/validation/userValidation.js';

const router = express.Router();

router.post('/register', validateRegisterUser, handleValidationErrors, registerUser);
router.post('/login', validateLoginUser, handleValidationErrors, loginUserController);
router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
});

router.get('/', authenticateToken, verifyAdmin, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/update/:id', validateRegisterUser, handleValidationErrors, authenticateToken, updateUser);
router.delete('/delete/:id', authenticateToken, deleteUser);
router.put('/restore/:id', authenticateToken, verifyAdmin, restoreUser);

// Ruta protegida por token JWT
router.get('/profile', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});

export default router;
