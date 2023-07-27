require('dotenv').config();

const config = {
    port: 3001,
    MONGO_DB_CONNECTION_STR: process.env.MONGO_DB_CONNECTION_STR,
    JWT_SECRET: process.env.JWT_SECRET,
    TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN
};

module.exports = config;
