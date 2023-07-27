const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../../config');
const {User} = require('../../register/models/index');
const {SUCCESS_STATUS, UNAUTHORIZED_STATUS, NOT_FOUND_STATUS, INTERNAL_SERVER_ERROR} = require('../../../constants/http');

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
                    const token = jwt.sign(
                        {
                            email: user.email,
                            password: user.password
                        },
                        config.JWT_SECRET,
                        {
                            expiresIn: 60 * 60 * 12 // seconds*minutes*hours, 12 hours in this case
                        }
                    ); // JWT is way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

                    console.log('user logged in successfully');

                    return res.status(SUCCESS_STATUS).json({
                        success: true,
                        user: {
                            // eslint-disable-next-line no-underscore-dangle
                            id: user._id,
                            username: user.username,
                            email: user.email
                        },
                        token
                    });
                } else {
                    return res.status(UNAUTHORIZED_STATUS).json({
                        success: true,
                        message: `incorrect password`
                    });
                }
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
