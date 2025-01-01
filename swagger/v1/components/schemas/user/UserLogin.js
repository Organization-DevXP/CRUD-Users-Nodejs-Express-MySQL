// swagger/schemas/UserLogin.js

const UserLogin = {
    type: "object",
    properties: {
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
    required: ["email", "password"]
};

export default UserLogin;
