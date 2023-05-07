// const Bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
//
// const config = require('../../../config');

// todo: replace mock with a real logic
module.exports.login = async (res, parameters) => {
    console.log('login route received a request with parameters', parameters);

    return res.status(200).json({
        success: true,
        user: {
            id: '123-321',
            name: 'Alex.Chernetsky'
        }
    });
};
