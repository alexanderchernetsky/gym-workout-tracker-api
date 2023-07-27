const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
//
// const config = require('../../../config');
const {User} = require('../../register/models/index');
const {SUCCESS_STATUS, UNAUTHORIZED_STATUS, NOT_FOUND_STATUS, INTERNAL_SERVER_ERROR} = require('../../../constants/http');

// todo: disable this eslint rule
// eslint-disable-next-line consistent-return
module.exports.login = async (res, parameters) => {
    console.log('login route received a request with parameters', parameters);

    try {
        const user = await User.findOne({
            email: parameters.email
        }); // returns a Query https://mongoosejs.com/docs/queries.html#queries-are-not-promises

        console.log('user', user);

        if (user) {
            // check passwords
            bcrypt.compare(parameters.password, user.password, (error, isPasswordMatch) => {
                if (error) {
                    console.log('Bcrypt error:', error);
                    throw error;
                }

                if (isPasswordMatch) {
                    // todo: create JWT and return it in a response
                    console.log('user logged in successfully');

                    return res.status(SUCCESS_STATUS).json({
                        success: true,
                        user: {
                            // eslint-disable-next-line no-underscore-dangle
                            id: user._id,
                            username: user.username,
                            email: user.email
                        }
                    });
                }
                return res.status(UNAUTHORIZED_STATUS).json({
                    success: true,
                    message: `incorrect password`
                });
            });
        } else {
            // user not found
            return res.status(NOT_FOUND_STATUS).json({
                success: true,
                message: `user with such email doesn't exist`
            });
        }
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            success: true,
            message: 'server failed to process your request'
        });
    }
};
