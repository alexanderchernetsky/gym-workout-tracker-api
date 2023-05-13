// todo: replace mock with a real logic
module.exports.deleteProgressEntry = async (res, id) => {
    console.log('deleteProgressEntry route received a request with id', id);

    return res.status(200).json({
        success: true
    });
};
