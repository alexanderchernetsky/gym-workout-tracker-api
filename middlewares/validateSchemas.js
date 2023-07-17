const SERVER_CANNOT_PROCESS_REQUEST_STATUS = 422;

// middleware to use with the yup library
const inputs = (schema, property) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req[property]);
            console.log('request validated');
            next();
        } catch (error) {
            console.log('validation error');
            res.status(SERVER_CANNOT_PROCESS_REQUEST_STATUS).json({error, status: SERVER_CANNOT_PROCESS_REQUEST_STATUS});
        }
    };
};

module.exports = {inputs};
