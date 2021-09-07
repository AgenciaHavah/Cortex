import { Router } from 'express';

// Services
import TherapistService from '../services/TherapistService';

const router = Router();

// Get therapist index
router.get('/', async (_req, res) => {
    try {
        const therapistService = new TherapistService();

        const therapists = await therapistService.index();

        res.status(200).send(therapists);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/country', async (_req, res) => {
    try {
        const therapistService = new TherapistService();

        const countries = await therapistService.getCountries();

        res.status(200).send(countries);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/location', async (_req, res) => {
    try {
        const therapistService = new TherapistService();

        const locations = await therapistService.getLocations();

        res.status(200).send(locations);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/message', async (req, res) => {
    try {
        const { therapist, name, email, phone, message } = req.body;

        const therapistService = new TherapistService();

        const data = await therapistService.createTherapistMessage({
            name,
            email,
            phone,
            message,
            therapistId: therapist,
        });

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
