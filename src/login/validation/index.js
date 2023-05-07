const Joi = require('@hapi/joi');

// todo: use yup for validation
const schemas = {
    login: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
};

module.exports = schemas;
