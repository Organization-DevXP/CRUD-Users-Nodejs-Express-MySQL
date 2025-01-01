// swagger/main.js

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerSpec.js';

const setupSwaggerV1 = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwaggerV1;