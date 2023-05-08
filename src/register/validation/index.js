const Joi = require('@hapi/joi');

// todo: use yup for validation
const schemas = {
    register: Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
};

module.exports = schemas;
