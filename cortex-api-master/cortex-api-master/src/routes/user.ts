import { Router } from 'express';

// Middlewares
// import isAuth from '../middlewares/isAuth';

// Services
import DataService from '../services/DataService';

const router = Router();

// Get user index
// router.get('/', isAuth, async (_req, res) => {
//     try {
//         const dataService = new DataService();

//         const users = await dataService.index();

//         res.status(200).send(users);
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

// Register user
router.post('/', async (req, res) => {
    try {
        // [TODO]: Must add some validation here
        const data = req.body;
        const dataService = new DataService();

        const user = await dataService.createUser(data);

        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
