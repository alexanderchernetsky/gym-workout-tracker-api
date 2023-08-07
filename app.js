const express = require('express');
const bodyParser = require('body-parser');
const expressip = require('express-ip');

const app = express();

app.use(
    bodyParser.json({
        limit: '50mb'
    })
); // have to increase the limit, otherwise requests with photos will fail
app.use(bodyParser.urlencoded({extended: false}));

app.use(expressip().getIpInfoMiddleware);

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, https://gym-workout-tracker.vercel.app/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Origin, Content-Type, X-Auth-Token');

    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});

require('./routes')(app);

module.exports = app;
