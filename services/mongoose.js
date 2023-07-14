const mongoose = require('mongoose');

const config = require('../config');

const dbUrl = config.MONGO_DB_CONNECTION_STR;

mongoose.connect(
    dbUrl,
    {useNewUrlParser: true, useUnifiedTopology: true}, // To avoid deprecated options
    err => {
        if (err) {
            console.error('Failed to connect to MongoDB', err);
        } else {
            console.log('Successfully connected to MongoDB');
        }
    }
);

module.exports = mongoose;
