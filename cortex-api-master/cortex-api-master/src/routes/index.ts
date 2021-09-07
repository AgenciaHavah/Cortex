import { Router } from 'express';

// Routers
import User from './user';
import Therapist from './therapist';
import Course from './course';

const router = Router();

router.get('/', (_req, res) => {
    res.send({
        message: 'Cortex - API - v1',
    });
});

router.use('/user', User);
router.use('/therapist', Therapist);
router.use('/course', Course);

export default router;
