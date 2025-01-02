CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada usuario
    username VARCHAR(50) NOT NULL,     -- Nombre de usuario
    email VARCHAR(100) NOT NULL UNIQUE, -- Correo electrónico único
    password VARCHAR(255) NOT NULL,    -- Contraseña encriptada
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de creación
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Fecha de última actualización
);