const mongoose = require('../../../services/mongoose');

const ProgressEntry = mongoose.model(
    'ProgressEntry',
    {
        weight: {
            type: Number,
            required: true
        },
        progressIndicators: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        }
    },
    'progress_entries'
);

module.exports = {
    ProgressEntry
};
