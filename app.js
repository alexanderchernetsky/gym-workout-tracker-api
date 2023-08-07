const express = require('express');
const bodyParser = require('body-parser');
const expressip = require('express-ip');
const cors = require('cors');

const app = express();

app.use(
    bodyParser.json({
        limit: '50mb'
    })
); // have to increase the limit, otherwise requests with photos will fail
app.use(bodyParser.urlencoded({extended: false}));

app.use(expressip().getIpInfoMiddleware);

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://gym-workout-tracker.vercel.app']
    })
);

require('./routes')(app);

module.exports = app;
