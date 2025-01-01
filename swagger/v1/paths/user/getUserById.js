import User from "../../components/schemas/user/User.js";

const getUserById = {
    get: {
        tags: ['Usuarios'],
        summary: 'Obtener usuario por ID',
        description: 'Recupera un usuario por su ID. Asegúrate de que no esté eliminado (borrado lógico).',
        security: [
            {
                BearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID del usuario',
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ],
        responses: {
            200: {
                description: 'Usuario encontrado',
                content: {
                    'application/json': {
                        schema: User
                    }
                }
            },
            404: {
                description: 'Usuario no encontrado o está eliminado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getUserById;