const status = require('../src/health/routes');
const login = require('../src/login/routes');
const register = require('../src/register/routes');
const progressEntries = require('../src/progress-entries/routes');
const progressEntry = require('../src/progress-entry/routes');
const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports = app => {
    app.use('/', status);
    app.use('/register', register);
    app.use('/login', login);
    app.use('/progress-entries', validateAuth.checkIfAuthenticated, progressEntries);
    app.use('/progress-entry', progressEntry);
    // app.use('/users', users);
    // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
    app.use('*', (req, res) => {
        res.send('Not found!!!');
    });
};
