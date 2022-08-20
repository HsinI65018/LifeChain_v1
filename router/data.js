const express = require('express');
const router = express.Router();
const getData = require('../controller/data');

router.post('/', getData);

module.exports = router;