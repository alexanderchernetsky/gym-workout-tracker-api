const status = require('../src/health/routes');
// const users = require('../src/users/routes');
const login = require('../src/login/routes');
// const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports = app => {
    app.use('/', status);
    app.use('/login', login);
    // app.use('/users', users);
    // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
    app.use('*', (req, res) => {
        res.send('Not found!!!');
    });
};
