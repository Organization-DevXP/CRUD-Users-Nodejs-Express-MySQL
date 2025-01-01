// swagger/components/securitySchemes/bearerAuth.js

const bearerAuth = {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
    description: "JWT para autenticar usuarios. Se incluye en el encabezado de las solicitudes como: 'Authorization: Bearer {token}'"
};

export default bearerAuth;
