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
        coins: {
            type: "integer",
            description: "Cantidad de monedas disponibles para el usuario en la plataforma",
            example: 100
        },
        role: {
            type: "string",
            description: "Rol del usuario dentro del sistema (usuario común o administrador)",
            enum: ["user", "admin"],
            example: "user"
        },
        created_at: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora en que el usuario fue creado en el sistema",
            example: "2024-12-31T12:34:56Z"
        }
    },
    required: ["id", "username", "email", "coins", "role", "created_at"]
};

export default User;
