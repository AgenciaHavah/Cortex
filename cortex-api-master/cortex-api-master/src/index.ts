/* eslint-disable no-console */
import './config/environment';
import chalk from 'chalk';

import app from './app';
import { sequelize } from './config/database';

const { PORT = 3300, DB_DATABASE, NODE_ENV } = process.env;

app.listen(PORT, () => {
    console.log(
        chalk.magenta('Server started!'),
        'listening on',
        chalk.bold.cyan(`http://localhost:${PORT}`),
    );

    console.log('Application environment: %s', chalk.yellow(NODE_ENV));

    sequelize
        .authenticate()
        .then(() =>
            console.log(
                chalk.green('Successfully'),
                'connected to',
                chalk.italic.cyan(DB_DATABASE),
                'database',
            ),
        )
        .catch(console.error);
});
