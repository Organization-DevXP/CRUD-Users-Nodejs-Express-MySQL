// swagger/components/schemas/user/User.js

const User = {
    type: "object",
    properties: {
        id: {
            type: "integer",
            description: "Identificador único del usuario en la base de datos",
            example: 123456
        },
        username: {
            type: "string",
            description: "Nombre de usuario único utilizado para acceder al sistema",
            example: "john_doe"
        },
        email: {
            type: "string",
            description: "Correo electrónico único del usuario",
            example: "john.doe@example.com"
        },
        password: {
            type: "string",
            description: "Contraseña del usuario",
            example: "P@ssw0rd123"
        },
        created_at: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora en que el usuario fue creado en el sistema",
            example: "2024-12-31T12:34:56Z"
        },
        updated_at: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora de la última actualización del usuario",
            example: "2024-12-31T12:34:56Z"
        },
        is_deleted: {
            type: "boolean",
            description: "Estado de eliminación del usuario (si está marcado como eliminado)",
            example: false
        },
        role: {
            type: "string",
            description: "Rol del usuario dentro del sistema (usuario común o administrador)",
            enum: ["user", "admin"],
            example: "user"
        }
    },
    required: ["id", "username", "email", "role", "created_at"]
};

export default User;
