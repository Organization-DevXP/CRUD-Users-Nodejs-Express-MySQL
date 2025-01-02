# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Apreciamos tu ayuda para mejorar y expandir esta plantilla de API en Node.js. Sigue estas pautas para garantizar que el proceso de contribución sea claro y eficiente.

## Cómo empezar

1. **Fork del repositorio**  
   Crea un fork de este repositorio haciendo clic en el botón **Fork** en la esquina superior derecha de esta página.

2. **Clona el repositorio**  
   Clona tu fork a tu máquina local:

```bash
git clone https://github.com/Organization-DevXP/CRUD-Users-Nodejs-Express-MySQL.git
cd CRUD-Users-Nodejs-Express-MySQL
```

3. **Crea una rama para tus cambios**
   Utiliza una rama separada para tus contribuciones. Usa un nombre descriptivo para la rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

4. **Instala las dependencias**
   Instala todas las dependencias necesarias para el proyecto:

```bash
npm install
```

5. **Asegúrate de que las pruebas pasen**
   Ejecuta los tests existentes para confirmar que todo funciona correctamente:

```bash
npm test
```

# Cómo contribuir
## Reportar problemas

Si encuentras un error o tienes una idea para mejorar el proyecto:

1. Abre un nuevo issue [aquí](https://github.com/Organization-DevXP/CRUD-Users-Nodejs-Express-MySQL/issues).
2. Describe el problema o la mejora de manera clara. Incluye detalles como:
   - Pasos para reproducir el problema.
   - Versión de Node.js utilizada.
   - Comportamiento esperado vs. actual.

## Hacer cambios al código

1. Realiza tus cambios en la rama que creaste.
2. Asegúrate de seguir las convenciones de estilo del proyecto (puedes usar herramientas como Prettier y ESLint).
3. Agrega pruebas para cualquier funcionalidad nueva o cambios importantes.

## Realizar un Pull Request

Cuando hayas terminado tus cambios:

1. Confirma tus cambios con un mensaje claro:

```bash
git commit -m "feat: descripción breve del cambio"
```

2. Haz push de tu rama al fork:

```bash
git push origin feature/nueva-funcionalidad
```

3. Abre un Pull Request desde tu fork hacia el repositorio original.

4. Llena la plantilla del Pull Request (si está disponible) con información detallada sobre tus cambios.

## Revisión de código

Tu Pull Request será revisado por los mantenedores del proyecto. Es posible que te pidan realizar ajustes antes de que sea aceptado.

---

## Pautas de estilo

- Sigue las convenciones de [JavaScript Standard Style](https://standardjs.com/) o la configuración definida en el archivo `.eslintrc`.
- Utiliza mensajes de commit descriptivos siguiendo el formato de [Conventional Commits](https://www.conventionalcommits.org/).

### Ejemplos de mensajes de commit

- `feat: agregar autenticación con JWT`
- `fix: corregir error en la validación de usuarios`
- `docs: actualizar documentación de endpoints`

---

## Recursos útiles

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [Swagger Documentation](https://swagger.io/docs/)

---

## Código de Conducta

Este proyecto sigue un [Código de Conducta](./CODE_OF_CONDUCT.md). Por favor, revísalo antes de contribuir.

---

¡Gracias por tu contribución! 🚀  
Si tienes preguntas o necesitas ayuda, no dudes en abrir un issue o contactar a los mantenedores.
