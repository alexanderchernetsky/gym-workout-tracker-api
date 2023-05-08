const express = require('express');

const controller = require('./controller/index');
const validateSchemas = require('../../middlewares/validateSchemas');
const schemas = require('./validation/index.js');

const router = express.Router();

router.post('/', validateSchemas.inputs(schemas.register, 'body'), (req, res) => {
    controller.register(res, req.body);
});

module.exports = router;
