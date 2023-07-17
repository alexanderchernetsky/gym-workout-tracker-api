const yup = require('yup');

const FIELD_MIN_LENGTH = 5;
const FIELD_MAX_LENGTH = 30;

const getLengthValidationMessage = (fieldName, min, max) => `${fieldName} should contain between ${min} and ${max} characters`;

const userNameLengthValidationMsg = getLengthValidationMessage('user name', FIELD_MIN_LENGTH, FIELD_MAX_LENGTH);
const passwordLengthValidationMsg = getLengthValidationMessage('password', FIELD_MIN_LENGTH, FIELD_MAX_LENGTH);

const schemas = {
    register: yup.object().shape({
        username: yup
            .string()
            .required('username is required')
            .min(FIELD_MIN_LENGTH, userNameLengthValidationMsg)
            .max(FIELD_MAX_LENGTH, userNameLengthValidationMsg),
        email: yup.string().email('email is not valid').required('email is required'),
        password: yup
            .string()
            .required('password is required')
            .min(FIELD_MIN_LENGTH, passwordLengthValidationMsg)
            .max(FIELD_MAX_LENGTH, passwordLengthValidationMsg)
    })
};

module.exports = schemas;
