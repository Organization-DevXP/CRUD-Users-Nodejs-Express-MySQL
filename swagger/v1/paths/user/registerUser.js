// swagger/paths/users/registerUser.js

const registerUser = {
    post: {
        summary: "Registrar un nuevo usuario",
        description: "Crea un nuevo usuario en la plataforma con su nombre de usuario, correo electrónico y contraseña.",
        tags: ["Usuario"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
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
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Usuario creado exitosamente.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Usuario creado exitosamente"
                                },
                                user: {
                                    type: "object",
                                    properties: {
                                        id: { type: "string", example: "123456" },
                                        username: { type: "string", example: "john_doe" },
                                        email: { type: "string", example: "john.doe@example.com" }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: "Error en la solicitud (datos inválidos o incompletos).",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: { type: "string", example: "Mensaje de error aquí" }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default registerUser;
