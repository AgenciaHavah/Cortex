import { Router } from 'express';

// Services
import DataService from '../services/DataService';

const router = Router();

// Get course index
router.get('/', async (_req, res) => {
    try {
        const dataService = new DataService();

        const courses = await dataService.courses();

        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get course details by slug
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;

        const dataService = new DataService();

        const course = await dataService.getCourse(slug);

        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }

        return res.status(200).send(course);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

export default router;
