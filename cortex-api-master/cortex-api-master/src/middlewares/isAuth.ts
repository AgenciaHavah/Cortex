/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) throw new Error('No access token');

        const [, token] = authorization.split(' ');

        if (!token) throw new Error('Access denied');

        jwt.verify(token, process.env.JWT_SECRET, (error, response) => {
            if (error || !response) throw new Error('Invalid token');

            req.body.user = response;
            next();
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
