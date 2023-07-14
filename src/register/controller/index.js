const Bcrypt = require('bcrypt');
const models = require('../models/index');

// eslint-disable-next-line consistent-return
module.exports.register = async (res, parameters) => {
    console.log('register route received a request with parameters', parameters);

    // todo: check that user is unique OR will it be rejected by the DB ?
    const newUser = models.User({
        password: Bcrypt.hashSync(parameters.password, 10), // todo: check what's going on here
        username: parameters.username,
        email: parameters.email
    });

    try {
        await newUser.save();

        res.status(201).json({
            success: true
        });
    } catch (error) {
        // todo: check that error is shown on the frontend
        return res.status(400).json({
            status: 400,
            message: `Registration failed: ${error}`
        });
    }
};
