// ./src/models/userModel.js

import { pool } from '../../config/db.js';

// Crear Usuario
export const createUserModel = async (username, email, password) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        // Verificar si el correo ya está en uso
        const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('El correo electrónico ya está en uso');
        }
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const [result] = await connection.execute(query, [username, email, password]);
        await connection.commit();
        return { id: result.insertId, username, email };
    } catch (error) {
        await connection.rollback();
        console.error('Error al crear el usuario:', error.message);
        throw error;
    } finally {
        connection.release();
    }
};

// Obtener email de Usuario
export const getUserByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM users WHERE email = ? AND is_deleted = ?';
        const [rows] = await pool.execute(query, [email, false]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error('Error al obtener el mail del usuario: ', error.message);
        throw error;
    }
};

// Cierre de sesion de Usuario
export const logoutUserModel = async (userId, state) => {
    const connection = await pool.getConnection();
    try {
        const query = 'UPDATE users SET is_active = ? WHERE id = ?';
        const [result] = await connection.execute(query, [state, userId]);
        return result.affectedRows > 0; // Retorna true si se actualizó algo
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error.message);
        throw error;
    } finally {
        connection.release();
    }
};

// Verificar si el usuario está activo
export const checkUserActive = async (userId) => {
    try {
        const query = 'SELECT is_active FROM users WHERE id = ?';
        const [rows] = await pool.execute(query, [userId]);
        return rows.length > 0 && rows[0].is_active;
    } catch (error) {
        console.error('Error al verificar que el usuario esta activo:',
            error.message);
        throw error;
    }
};

// Obtener todos los usuarios
export const getAllUsersModel = async () => {
    try {
        const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE is_deleted = ?', [false]);
        return rows;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        throw error;
    }
};

// Obtener usuario por ID
export const getUserByIdModel = async (id) => {
    try {
        const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE id = ? AND is_deleted = ?', [id, false]);
        return rows[0];
    } catch (error) {
        console.error('Error al obtener el usuario:', error.message);
        throw error;
    }
};

// Actualizar usuario
export const updateUserModel = async (id, username, email, passwordHash) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        // Verificar si el correo ya está en uso por otro usuario
        const [existingUser] = await connection.execute(
            'SELECT * FROM users WHERE email = ? AND id != ? AND is_deleted = ?',
            [email, id, false]
        );
        if (existingUser.length > 0) {
            throw new Error('El correo electrónico ya está en uso.');
        }
        const query = `
            UPDATE users 
            SET username = ?, email = ?, password = ? 
            WHERE id = ? AND is_deleted = ?`;
        const [result] = await connection.execute(query, [username, email, passwordHash, id, false]);
        await connection.commit();
        return result.affectedRows > 0;
    } catch (error) {
        await connection.rollback();
        console.error('Error al actualizar el usuario:', error.message);
        throw error;
    } finally {
        connection.release();
    }
};

// Eliminar usuario
export const deleteUserModel = async (id) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const query = 'UPDATE users SET is_deleted = ? WHERE id = ?';
        const [result] = await connection.execute(query, [true, id]);
        await connection.commit();
        return result.affectedRows > 0;
    } catch (error) {
        await connection.rollback();
        console.error('Error al eliminar el usuario:', error.message);
        throw error;
    } finally {
        connection.release();
    }
};

export const restoreUserModel = async (id) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const query = 'UPDATE users SET is_deleted = ? WHERE id = ?';
        const [result] = await connection.execute(query, [false, id]);
        await connection.commit();
        return result.affectedRows > 0;
    } catch (error) {
        await connection.rollback();
        console.error('Error al restaurar el usuario:', error.message);
        throw error;
    } finally {
        connection.release();
    }
};