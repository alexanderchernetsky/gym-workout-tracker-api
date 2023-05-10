const express = require('express');
const {getProgressEntries} = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    getProgressEntries(res);
});

module.exports = router;
