const FIELD_MIN_LENGTH = 5;
const FIELD_MAX_LENGTH = 30;

const getLengthValidationMessage = (fieldName, min, max) => `${fieldName} should contain between ${min} and ${max} characters`;

const userNameLengthValidationMsg = getLengthValidationMessage('user name', FIELD_MIN_LENGTH, FIELD_MAX_LENGTH);
const passwordLengthValidationMsg = getLengthValidationMessage('password', FIELD_MIN_LENGTH, FIELD_MAX_LENGTH);

module.exports = {FIELD_MIN_LENGTH, FIELD_MAX_LENGTH, userNameLengthValidationMsg, passwordLengthValidationMsg};
