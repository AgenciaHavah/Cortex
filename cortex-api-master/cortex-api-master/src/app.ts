import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';
import admin from './admin';

const app = express();

app.use(cors());
app.use(admin);
app.use(helmet());
app.use(json());

app.get('/', (_req, res) => {
    res.send('OK');
});

app.use('/api/v1', routes);

export default app;
