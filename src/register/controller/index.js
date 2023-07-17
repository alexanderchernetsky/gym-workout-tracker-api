const bcrypt = require('bcrypt');
const models = require('../models/index');

const BAD_REQUEST_STATUS = 400;

// eslint-disable-next-line consistent-return
module.exports.register = async (res, parameters) => {
    console.log('register route received a request with parameters', parameters);

    const salt = bcrypt.genSaltSync(10); // A salt is a random string that makes the hash unpredictable.
    // By hashing a plain text password plus a salt, the hash algorithm’s output is no longer predictable.
    // The same password will no longer yield the same hash. The salt gets automatically included with the hash, so you do not need to store it in a database.
    const newUser = models.User({
        password: bcrypt.hashSync(parameters.password, salt), // synchronously generates a hash for the given password
        username: parameters.username,
        email: parameters.email
    });

    try {
        await newUser.save();

        res.status(201).json({
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
