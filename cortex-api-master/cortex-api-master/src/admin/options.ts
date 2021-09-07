import { ResourceOptions } from 'admin-bro';

// eslint-disable-next-line import/prefer-default-export
export const userOptions: ResourceOptions = {
    properties: {
        id: {
            position: 0,
            isId: true,
        },
        firstName: {
            position: 1,
        },
        lastName: {
            position: 2,
        },
        email: {
            position: 3,
        },
        message: {
            position: 4,
        },
    },
};
