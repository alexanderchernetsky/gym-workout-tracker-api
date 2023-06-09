const app = require('./app');
const config = require('./config');

const port = process.env.PORT || config.port;

const server = app.listen(port, () => {
    console.log('server is running on port', server.address().port);
});
