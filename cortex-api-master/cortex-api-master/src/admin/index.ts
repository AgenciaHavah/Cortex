import AdminBro from 'admin-bro';
import AdminBroExpress from 'admin-bro-expressjs';
import AdminBroSequelize from '@admin-bro/sequelize';
import { Router } from 'express';

import { sequelize } from '../config/database';

import { userOptions } from './options';

const router = Router();

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
    databases: [sequelize],
    resources: [
        {
            resource: sequelize.models.User,
            options: userOptions,
        },
    ],
    rootPath: '/admin',
});

router.use(
    adminBro.options.rootPath,
    AdminBroExpress.buildAuthenticatedRouter(adminBro, {
        authenticate: async (email, password) => {
            if (email.toLowerCase() === 'admin@cortexacademy.com') {
                if (password === 'Axj8ipSQ') {
                    return true;
                }
                return false;
            }
            return false;
        },
        cookiePassword: 'cortex-dev',
    }),
);

export default router;
