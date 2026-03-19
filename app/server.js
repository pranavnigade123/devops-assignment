const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.APP_MESSAGE || 'DevOps Assignment Running';

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send(`${MESSAGE} from ${hostname}`);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date(),
        message: 'Healthy'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
