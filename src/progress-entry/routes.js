const express = require('express');
const controller = require('./controller');
const validateSchemas = require('../../middlewares/validateSchemas');
const schemas = require('./validation');

const router = express.Router();

router.delete('/:id', (req, res) => {
    controller.deleteProgressEntry(res, req.params.id);
});

router.get('/:id', (req, res) => {
    controller.getProgressEntry(res, req.params.id);
});

router.put('/:id', validateSchemas.inputs(schemas.updateProgressEntry, 'body'), (req, res) => {
    controller.updateProgressEntry(res, req);
});

router.post('', validateSchemas.inputs(schemas.createProgressEntry, 'body'), (req, res) => {
    controller.createProgressEntry(res, req);
});

module.exports = router;
