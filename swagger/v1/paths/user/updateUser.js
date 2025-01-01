import User from "../../components/schemas/user/User.js";
import UserInput from "../../components/schemas/user/UserInput.js";

const updateUser = {
    put: {
        tags: ['Usuarios'],
        summary: 'Actualizar usuario',
        description: 'Actualiza los detalles de un usuario. Asegúrate de que el usuario no esté eliminado.',
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
                description: 'ID del usuario a actualizar',
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: UserInput
                }
            }
        },
        responses: {
            200: {
                description: 'Usuario actualizado correctamente',
                content: {
                    'application/json': {
                        schema: User
                    }
                }
            },
            400: {
                description: 'Entrada inválida'
            },
            404: {
                description: 'Usuario no encontrado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default updateUser;