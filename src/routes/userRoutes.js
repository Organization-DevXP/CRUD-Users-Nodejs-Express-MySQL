// ./src/routes/userRoutes.js

import express from 'express';
import { deleteUser, getAllUsers, getUserById, updateUser, restoreUser } from '../controllers/userController.js';

// Middlewares
import { authenticateToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validateRegisterUser } from '../middleware/validation/userValidation.js';
import { checkUserActiveMiddleware } from '../middleware/checkUserActiveMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, checkUserActiveMiddleware, verifyAdmin, getAllUsers);
router.get('/:id', authenticateToken, checkUserActiveMiddleware, getUserById);
router.put('/update/:id', validateRegisterUser, handleValidationErrors, authenticateToken, checkUserActiveMiddleware, updateUser);
router.delete('/delete/:id', authenticateToken, checkUserActiveMiddleware, deleteUser);
router.put('/restore/:id', authenticateToken, checkUserActiveMiddleware, verifyAdmin, restoreUser);

export default router;
