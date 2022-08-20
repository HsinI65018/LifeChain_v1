const express = require('express');
const router = express.Router();
const { checkUser, createUser, userLogIn, userLogOut } = require('../controller/user');

router.get('/', checkUser);
router.post('/', createUser);
router.post('/login', userLogIn);
router.delete('/', userLogOut);

module.exports = router;