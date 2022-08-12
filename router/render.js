const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home')
})

router.get('/calculate', (req, res) => {
    res.render('pages/calculate')
})

module.exports = router;