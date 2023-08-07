const {ProgressEntry} = require('../../progress-entry/models/index');

module.exports.getProgressEntries = async res => {
    console.log('getProgressEntries route received a GET request');

    try {
        // todo: remove hardcoded user_id, should fetch per user id, get user id from jwt
        const entries = await ProgressEntry.find({
            user_id: '64c3c0dc74a34b1f1f71a0bd'
        });

        console.log('entries', entries);

        res.status(200).json({
            success: true,
            data: entries
        });
    } catch (error) {
        // todo handle error
    }
};
