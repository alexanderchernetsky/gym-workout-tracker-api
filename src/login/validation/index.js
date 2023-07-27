const yup = require('yup');
const {FIELD_MIN_LENGTH, FIELD_MAX_LENGTH, passwordLengthValidationMsg} = require('../../../middlewares/yup');

const schemas = {
    login: yup.object().shape({
        email: yup.string().email('email is not valid').required('email is required'),
        password: yup
            .string()
            .required('password is required')
            .min(FIELD_MIN_LENGTH, passwordLengthValidationMsg)
            .max(FIELD_MAX_LENGTH, passwordLengthValidationMsg)
    })
};

module.exports = schemas;
