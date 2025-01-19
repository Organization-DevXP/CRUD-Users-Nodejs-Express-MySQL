// ./src/routes/userRoutes.js

import express from 'express';
import { deleteUser, getAllUsers, getUserById, updateUser, restoreUser } from '../controllers/userController.js';

// Middlewares
import { authenticateToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validateRegisterUser } from '../middleware/validation/userValidation.js';

const router = express.Router();

router.get('/', authenticateToken, verifyAdmin, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/update/:id', validateRegisterUser, handleValidationErrors, authenticateToken, updateUser);
router.delete('/delete/:id', authenticateToken, deleteUser);
router.put('/restore/:id', authenticateToken, verifyAdmin, restoreUser);

export default router;
