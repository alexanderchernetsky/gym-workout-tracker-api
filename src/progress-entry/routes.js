const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.delete('/:id', (req, res) => {
    controller.deleteProgressEntry(res, req.params.id);
});

module.exports = router;
