const restoreUser = {
    put: {
        tags: ['Usuarios'],
        summary: 'Restaurar usuario (borrado lógico)',
        description: 'Restaura un usuario previamente eliminado (borrado lógico) marcando el campo `is_deleted` como `false`. Solo los administradores pueden restaurar usuarios.',
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
                description: 'ID del usuario a restaurar',
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ],
        responses: {
            200: {
                description: 'Usuario restaurado correctamente'
            },
            404: {
                description: 'Usuario no encontrado o ya restaurado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default restoreUser;
