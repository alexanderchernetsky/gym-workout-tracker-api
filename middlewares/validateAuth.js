const jwt = require('jsonwebtoken');
const config = require('../config');
const {UNAUTHORIZED_STATUS} = require('../constants/http');

const checkIfAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(UNAUTHORIZED_STATUS).json({
            message: 'No token provided',
            status: UNAUTHORIZED_STATUS
        });
    }

    jwt.verify(token, config.JWT_SECRET, (error, decodedUser) => {
        if (error) {
            return res.status(UNAUTHORIZED_STATUS).json({message: 'Invalid token', status: UNAUTHORIZED_STATUS});
        }
        req.user = decodedUser;
        next();
    });
};

module.exports = {checkIfAuthenticated};
