// swagger/schemas/UserRegister.js

const UserRegister = {
    type: "object",
    properties: {
        username: {
            type: "string",
            description: "Nombre de usuario",
            example: "john_doe"
        },
        email: {
            type: "string",
            description: "Correo electrónico del usuario",
            example: "john.doe@example.com"
        },
        password: {
            type: "string",
            description: "Contraseña del usuario",
            example: "securePassword123"
        }
    },
    required: ["username", "email", "password"]
};

export default UserRegister;
