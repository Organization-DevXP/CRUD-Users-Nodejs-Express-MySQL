const UserInput = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 3,
            description: 'El nombre de usuario del usuario.',
            example: 'nuevoUsuario'
        },
        email: {
            type: 'string',
            format: 'email',
            description: 'El correo electrónico del usuario.',
            example: 'nuevoemail@ejemplo.com'
        },
        password: {
            type: 'string',
            minLength: 6,
            description: 'La nueva contraseña del usuario.',
            example: 'nuevaContraseña123'
        },
    },
    required: ['username', 'email'], // Asumiendo que el correo y el nombre de usuario son obligatorios
    additionalProperties: false, // Para evitar que se incluyan propiedades adicionales no definidas
};

export default UserInput;
