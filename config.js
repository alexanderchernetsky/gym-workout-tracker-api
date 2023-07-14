require('dotenv').config();

const config = {
    port: 3001,
    MONGO_DB_CONNECTION_STR: process.env.MONGO_DB_CONNECTION_STR,
    API_KEY_JWT: process.env.API_KEY_JWT,
    TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN
};

module.exports = config;
