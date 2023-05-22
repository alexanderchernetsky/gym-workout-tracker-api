const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.delete('/:id', (req, res) => {
    controller.deleteProgressEntry(res, req.params.id);
});

router.get('/:id', (req, res) => {
    controller.getProgressEntry(res);
});

module.exports = router;
