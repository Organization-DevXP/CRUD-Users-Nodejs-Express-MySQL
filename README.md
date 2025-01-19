# Node.js API Template

Este proyecto es una plantilla inicial para desarrollar APIs en Node.js. Incluye características como autenticación, cifrado de contraseñas, documentación con Swagger, y conexión a bases de datos.

## Características principales

- **Autenticación con JWT:** Generación y validación de tokens de acceso.
- **Cifrado de contraseñas:** Uso de bcrypt.js para almacenar contraseñas de forma segura.
- **Documentación interactiva:** Configuración de Swagger para una exploración sencilla de los endpoints.
- **Gestión de errores:** Manejo centralizado de errores para garantizar respuestas consistentes.
- **Registro de solicitudes:** Uso de Morgan para registrar solicitudes HTTP.
- **Estructura modular:** Organización clara de rutas, controladores, y utilidades.
- **Gestión de usuarios:** Inclusión de rutas para registro, inicio de sesión, cierre de sesión, y administración de usuarios (crear, actualizar, eliminar, restaurar).

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Swagger](https://swagger.io/)
- [Morgan](https://github.com/expressjs/morgan)
- [MySQL](https://www.mysql.com/)

## Instalación

### Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

### Pasos

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=namedatabase
   JWT_SECRET=your_jwt_secret_key
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Endpoints principales

La documentación completa de los endpoints está disponible en Swagger. Una vez que el servidor esté corriendo, accede a:

```
http://localhost:3000/api-docs
```

### Explicación de las rutas disponibles:

- POST /api/v1/users/register: Esta ruta es para registrar
  un nuevo usuario. Ya tienes la validación y los errores
  manejados a través de los middlewares validateRegisterUser
  y handleValidationErrors.
- POST /api/v1/users/login: Ruta para la autenticación de
  usuario. También con la validación y manejo de errores.
- POST /api/v1/users/logout: Ruta para cerrar sesión del
  usuario. Esta acción solo devuelve un mensaje de éxito.
- GET /api/v1/users: Ruta para listar todos los usuarios.
  Está protegida por un middleware de autenticación
  (authenticateToken) y también verifica si el usuario es
  administrador a través de verifyAdmin.
- GET /api/v1/users/:id: Ruta para obtener los datos de un
  usuario por su ID. Requiere autenticación.
- PUT /api/v1/users/update/:id: Ruta para actualizar la
  información de un usuario. Requiere validación, manejo de
  errores y autenticación.
- DELETE /api/v1/users/delete/:id: Ruta para eliminar a un
  usuario. Está protegida por autenticación.
- PUT /api/v1/users/restore/:id: Ruta para restaurar a un
  usuario eliminado. Solo los administradores pueden acceder
  a esta ruta.

## Scripts

- `npm start`: Inicia la aplicación en modo producción.
- `npm run dev`: Inicia la aplicación en modo desarrollo.

## Estructura del proyecto

```bash
├── src/
│   ├── config/
│   │   ├── tableUser.sql
│   │   └── connectMySQL.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── models/
│   │   └── MySQL/
|   │       └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services/
│   │   ├── authService.js
│   │   └── userService.js
│   ├── utils/
│   │   ├── bcrypt.js
│   │   └── jwt.js
│   │
│   ├── middleware/
│   │   ├── validataion
│   │   │   ├── fieldsValidation.js
│   │   │   ├── validateUpdateUser.js
│   │   │   └── userValidation.js
│   │   ├── handleValidationErrors.js
│   │   ├── checkUserActiveMiddleware.js
│   │   ├── verifyAdmin.js
│   │   └── authMiddleware.js
│   │
│   ├── app.js    # Configuración de la app
│   └── server.js # Arranque del servidor
├── swagger/      # Configuracion de Swagger
├── .env.example  # Ejemplo de Variables de entorno
├── package.json  # Dependencias y scripts
└──
```

## Contribución

Por favor, consulta el archivo [CONTRIBUTING.md](./CONTRIBUTING.md) para obtener las pautas detalladas sobre cómo contribuir a este proyecto.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por contribuir! Si tienes alguna duda o sugerencia, no dudes en abrir un issue o contactarnos.
