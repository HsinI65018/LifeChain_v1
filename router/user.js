const express = require('express');
const router = express.Router();
const transcation = require('../module/utility');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/', async (req, res) => {
    const token = req.cookies.jwt;
    if(token){
        const email = jwt.verify(token, process.env.JWT_SECRET_KEY, {algorithm: "HS256"}).email
        try {
            const sql = ["SELECT name, email FROM user WHERE email = ?"];
            const value = [[email]]
            const userInfo = await transcation(sql, value);
            res.status(200).json({'success': true, 'data': userInfo[0][0]})
        } catch (error) {
            res.status(500).json({'success': true, "message": "Server error!"})
        }
    }else{
        return res.status(403).json({'success': false, "message": "Can't get authorization"})
    }
});
router.post('/', async (req, res) => {
    const {userName, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const sql = ["SELECT email FROM user WHERE email = ?"];
    const value = [[email]]
    const checkEmail = await transcation(sql, value);

    if(checkEmail[0].length !== 0){
        return res.status(400).json({'success': false, "message": "This email already exist"})
    }

    try {
        const sql2 = ["INSERT INTO user (name, email, password) VALUES (?, ?, ?)"];
        const value2 = [[userName, email, hash]];
        await transcation(sql2, value2);
        res.status(200).json({'success': true})
    } catch (error) {
        res.status(500).json({'success': true, "message": "Server error!"})
    }
});
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        const sql = ["SELECT email, password FROM user WHERE email = ?"];
        const value = [[email]]
        const checkUser = await transcation(sql, value);

        if(checkUser[0].length === 0){
            return res.status(400).json({'success': false, "message": "This email does not exist"})
        }

        const hashPassword = checkUser[0][0].password;
        const checkPassword = bcrypt.compareSync(password, hashPassword);

        if(checkPassword){
            const token = jwt.sign({email: email}, process.env.JWT_SECRET_KEY, {algorithm: 'HS256'});
            res.cookie("jwt", token, {httpOnly: true});
            res.status(200).json({'success': true})
        }else{
            return res.status(400).json({'success': false, "message": "Wrong password!"})
        }
    } catch (error) {
        res.status(500).json({'success': true, "message": "Server error!"})
    }
});
router.delete('/', async (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({'success': true})
});

module.exports = router;