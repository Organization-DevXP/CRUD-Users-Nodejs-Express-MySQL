const deleteUser = {
    delete: {
        tags: ['Usuarios'],
        summary: 'Eliminar usuario (borrado lógico)',
        description: 'Marca un usuario como eliminado sin eliminarlo físicamente de la base de datos.',
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
                description: 'ID del usuario a eliminar',
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ],
        responses: {
            200: {
                description: 'Usuario eliminado correctamente (borrado lógico)'
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

export default deleteUser
