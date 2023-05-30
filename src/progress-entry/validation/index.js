const Joi = require('@hapi/joi');

// todo: use yup for validation
const schemas = {
    createProgressEntry: Joi.object().keys({
        weight: Joi.number().required(),
        progressIndicators: Joi.string().required(),
        date: Joi.string().required(),
        image: Joi.string().required()
    }),
    updateProgressEntry: Joi.object().keys({
        id: Joi.string().required(),
        weight: Joi.number().required(),
        progressIndicators: Joi.string().required(),
        date: Joi.string().required(),
        image: Joi.string().required()
    })
};

module.exports = schemas;
