// swagger/paths/auth/logout.js

const logout = {
    post: {
        summary: "Cerrar sesión",
        description: "Cierra la sesión del usuario autenticado e invalida el token de autenticación.",
        tags: ["Autenticador"],
        responses: {
            200: {
                description: "Sesión cerrada exitosamente.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Sesión cerrada exitosamente."
                                }
                            }
                        }
                    }
                }
            },
            401: {
                description: "No autorizado (token inválido o no proporcionado).",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "No autorizado. Proporcione un token válido."
                                }
                            }
                        }
                    }
                }
            },
            500: {
                description: "Error interno del servidor.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Ocurrió un error al cerrar la sesión."
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default logout;
