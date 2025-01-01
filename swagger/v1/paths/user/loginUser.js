// swagger/paths/users/loginUser.js

const loginUser = {
    post: {
        summary: "Iniciar sesión",
        description: "Permite a un usuario autenticarse en la plataforma y recibir un token JWT para futuras solicitudes.",
        tags: ["Usuario"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
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
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Inicio de sesión exitoso.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Inicio de sesión exitoso"
                                },
                                token: {
                                    type: "string",
                                    description: "Token JWT generado para el usuario",
                                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
            },
            401: {
                description: "Credenciales inválidas.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: { type: "string", example: "Credenciales inválidas" }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default loginUser;
