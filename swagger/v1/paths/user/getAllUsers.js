import User from "../../components/schemas/user/User.js";

const getAllUsers = {
    get: {
        tags: ['Usuarios'],
        summary: 'Obtener todos los usuarios',
        description: 'Recupera todos los usuarios que no han sido eliminados (borrado lógico).',
        security: [
            {
                BearerAuth: []
            }
        ],
        responses: {
            200: {
                description: 'Lista de usuarios',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: User
                        }
                    }
                }
            },
            404: {
                description: 'No se encontraron usuarios'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getAllUsers;