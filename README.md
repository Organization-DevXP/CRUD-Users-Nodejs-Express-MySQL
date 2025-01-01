# Node.js API Template

Este proyecto es una plantilla inicial para desarrollar APIs en Node.js. Incluye características como autenticación, cifrado de contraseñas, documentación con Swagger, y conexión a bases de datos.

## Características principales

- **Autenticación con JWT:** Generación y validación de tokens de acceso.
- **Cifrado de contraseñas:** Uso de bcrypt.js para almacenar contraseñas de forma segura.
- **Documentación interactiva:** Configuración de Swagger para una exploración sencilla de los endpoints.
- **Gestión de errores:** Manejo centralizado de errores para garantizar respuestas consistentes.
- **Registro de solicitudes:** Uso de Morgan para registrar solicitudes HTTP.
- **Estructura modular:** Organización clara de rutas, controladores, y utilidades.

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Swagger](https://swagger.io/)
- [Morgan](https://github.com/expressjs/morgan)

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
   PORT=3000
   HOST=localhost
   JWT_SECRET=tu_secreto_jwt
   DB_URI=tu_uri_de_base_de_datos
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

### Ejemplo de endpoints

- **Usuarios:**
  - `GET /api/v1/users` - Listar usuarios.
  - `POST /api/v1/users/register` - Registrar un nuevo usuario.
  - `POST /api/v1/users/login` - Autenticación de usuario.

## Scripts

- `npm start`: Inicia la aplicación en modo producción.
- `npm run dev`: Inicia la aplicación en modo desarrollo con nodemon.

## Estructura del proyecto

```
.
├── src
│   ├── app.js              # Configuración principal de la aplicación
│   ├── server.js           # Configuración del servidor
│   ├── config
│   │   └── db.js           # Configuración de la base de datos
│   ├── routes
│   │   └── userRoutes.js   # Rutas de usuarios
│   ├── controllers
│   │   └── userController.js # Controladores de usuarios
│   ├── utils
│   │   ├── bcrypt.js       # Utilidad para cifrado de contraseñas
│   │   └── jwt.js          # Utilidad para manejo de JWT
│   └── middleware          # Middleware personalizado
└── swagger
    └── v1
        └── main.js         # Configuración de Swagger
```

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/nueva_funcionalidad
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```
4. Haz push de tus cambios a tu fork:
   ```bash
   git push origin feature/nueva_funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por contribuir! Si tienes alguna duda o sugerencia, no dudes en abrir un issue o contactarnos.
