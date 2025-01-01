// ./src/middleware/verifyAdmin.js

export const verifyAdmin = (req, res, next) => {
    const userRole = req.userRol
    if (userRole !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado: Solo administradores pueden realizar esta acción' });
    }
    next();
};
