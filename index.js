import express from 'express';
import config from './configuration/config.js';

const app = express()

app.listen(config.port, () => {
    console.log(`API service is running on port: [${config.port}]`);
});