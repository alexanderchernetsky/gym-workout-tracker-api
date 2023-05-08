// todo: replace mock with a real logic
module.exports.register = async (res, parameters) => {
    console.log('register route received a request with parameters', parameters);

    res.status(200).json({
        success: true
    });
};
