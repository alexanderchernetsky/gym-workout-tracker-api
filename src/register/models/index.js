const mongoose = require('../../../services/mongoose');

const User = mongoose.model(
    'User',
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    'users'
);

module.exports = {
    User
};
