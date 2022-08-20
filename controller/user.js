const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../module/user');
const user = new User();

const checkUser = async (req, res) => {
    const token = req.cookies.jwt;
    if(token){
        const email = jwt.verify(token, process.env.JWT_SECRET_KEY, {algorithm: "HS256"}).email
        try {
            const userInfo = await user.getUserInfo(email)
            res.status(200).json({'success': true, 'data': userInfo})
        } catch (error) {
            res.status(500).json({'success': true, "message": "Server error!"})
        }
    }else{
        return res.status(403).json({'success': false, "message": "Can't get authorization"})
    }
}

const createUser = async (req, res) => {
    const {userName, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const checkEmail = await user.getUserSecret(email);
    if(checkEmail.length !== 0){
        return res.status(400).json({'success': false, "message": "This email already exist"})
    }

    try {
        await user.createUser(userName, email, hash);
        res.status(200).json({'success': true})
    } catch (error) {
        res.status(500).json({'success': true, "message": "Server error!"})
    }
}

const userLogIn = async (req, res) => {
    const {email, password} = req.body;
    try {
        const checkUser = await user.getUserSecret(email);
        if(checkUser.length === 0){
            return res.status(400).json({'success': false, "message": "This email does not exist"})
        }

        const hashPassword = checkUser[0].password;
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
}

const userLogOut = async (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({'success': true})
}

module.exports = {
    checkUser,
    createUser,
    userLogIn,
    userLogOut
}