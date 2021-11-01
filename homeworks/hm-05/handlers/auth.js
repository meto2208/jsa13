const users = require('../pkg/users/index');
const validator = require('../pkg/users/validator');

const login = async (req, res) => {
    try {
        await validator(req.body, 'LOGIN')
    } catch (e) {
        console.log(e);
        return res.status(500).send(e)
    }
    try {
        let user = await users.findByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('Email is not registered.')
        };
        if (user.password === req.body.password) {
            return res.status(201).send('Successfully logged in.');
        } else {
            return res.status(401).send('Wrong passwod.')
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    };
};
const createAccount = async (req, res) => {
    try {
        await validator(req.body);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    };
    try {
        let user = await users.create(req.body);
        res.status(201).send(user);
    } catch (e) {
        if (e.code === 11000) {
            return res.status(409).send('Email is already registered.')
        }
        console.log(e);
        res.status(500).send(e);
    }
};
const validate = (req, res) => {
    res.send('ok')
};
const forgotPassword = (req, res) => {
    res.send('ok')
};
const resetPassword = (req, res) => {
    res.send('ok')
};
module.exports = {
    login,
    validate,
    createAccount,
    forgotPassword,
    resetPassword
};