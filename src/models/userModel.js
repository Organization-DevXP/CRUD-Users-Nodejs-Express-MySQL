// ./src/models/userModel.js

import { pool } from '../config/db.js';

export const createUserModel = async (username, email, password) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const [result] = await pool.execute(query, [username, email, password]);
    return { id: result.insertId, username, email };
};

export const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ? AND is_deleted = ?';
    const [rows] = await pool.execute(query, [email, false]);
    return rows[0];
};

// Obtener todos los usuarios
export const getAllUsersModel = async () => {
    const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE is_deleted = ?', [false]);
    return rows;
};

// Obtener usuario por ID
export const getUserByIdModel = async (id) => {
    const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE id = ? AND is_deleted = ?', [id, false]);
    return rows[0];
};

// Actualizar usuario
export const updateUserModel = async (id, username, email, passwordHash) => {
    const query = `
        UPDATE users 
        SET username = ?, email = ?, password = ? 
        WHERE id = ?`;
    const [result] = await pool.execute(query, [username, email, passwordHash, id]);
    return result.affectedRows > 0;
};

// Eliminar usuario
export const deleteUserModel = async (id) => {
    const [result] = await pool.execute('UPDATE users SET is_deleted = ? WHERE id = ?', [true, id]);
    return result.affectedRows > 0;
};

export const restoreUserModel = async (id) => {
    const [result] = await pool.execute('UPDATE users SET is_deleted = ? WHERE id = ?', [false, id]);
    return result.affectedRows > 0;
};