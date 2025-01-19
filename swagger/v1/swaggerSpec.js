// swagger/swaggerSpec.js

import info from './info.js';
import servers from './servers.js';

// User
import User from './components/schemas/user/User.js';
import UserLogin from './components/schemas/user/UserLogin.js';
import UserRegister from './components/schemas/user/UserRegister.js';
import UserLoginP from './paths/auth/loginUser.js';
import UserRegisterP from './paths/auth/registerUser.js';
import logoutUser from './paths/auth/logoutUser.js';
import getAllUsers from './paths/user/getAllUsers.js';
import getUserById from './paths/user/getUserById.js';
import updateUser from './paths/user/updateUser.js';
import deleteUser from './paths/user/deleteUser.js';
import restoreUser from './paths/user/restoreUser.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        // Auth
        '/auth/register': UserRegisterP,
        '/auth/login': UserLoginP,
        '/auth/logout': logoutUser,
        // Users
        '/users': getAllUsers,
        '/users/{id}': getUserById,
        '/users/update/{id}': updateUser,
        '/users/delete/{id}': deleteUser,
        '/users/restore/{id}': restoreUser,

    },
    components: {
        schemas: {
            User,
            UserLogin,
            UserRegister,
        },
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    }
};

export default swaggerSpec;
