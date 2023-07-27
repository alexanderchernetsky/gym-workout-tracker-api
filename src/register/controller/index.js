const bcrypt = require('bcrypt');
const models = require('../models/index');
const {BAD_REQUEST_STATUS, NEW_RESOURCE_CREATED_STATUS} = require('../../../constants/http');

const SAULT_ROUNDS = 10; // The higher the saltRounds value, the more time the hashing algorithm takes. You want to select a number that is high enough to prevent attacks, but not slower than potential user patience.

// eslint-disable-next-line consistent-return
module.exports.register = async (res, parameters) => {
    console.log('register route received a request with parameters', parameters);

    const salt = bcrypt.genSaltSync(SAULT_ROUNDS); // A salt is a random string that makes the hash unpredictable.
    // By hashing a plain text password plus a salt, the hash algorithm’s output is no longer predictable.
    // The same password will no longer yield the same hash. The salt gets automatically included with the hash, so you do not need to store it in a database.
    const newUser = models.User({
        password: bcrypt.hashSync(parameters.password, salt), // synchronously generates a hash for the given password
        username: parameters.username,
        email: parameters.email
    });

    try {
        await newUser.save();

        res.status(NEW_RESOURCE_CREATED_STATUS).json({
            success: true
        });
    } catch (error) {
        console.log(error);

        return res.status(BAD_REQUEST_STATUS).json({
            status: BAD_REQUEST_STATUS,
            message: `user with such email or username already exists`
        });
    }
};
