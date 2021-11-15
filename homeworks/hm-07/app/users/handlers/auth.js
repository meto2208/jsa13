const users = require('../pkg/users');
const bcrypt = require('bcryptjs');
const validator = require('../pkg/users/validate');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        let u = await users.getByEmail(req.body.email);
        if (!u) return res.status(404).send();
        if (!bcrypt.compareSync(req.body.password, u.password)) {
            return res.status(400).send('Wrong credentials.');
        };

        // jwtoken create
        let token = jwt.sign({
            uid: u._id,
            email: u.email,
            fullname: `${u.first_name} ${u.last_name}`,

        }, 'thisissparta')

        res.status(200).send({ token })
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

const validate = async (req, res) => {
    let hello = `Hello ${req.user.fullname}`;
    res.send(hello)
};

const renew = async (req, res) => {
    let payload = {
        uid: req.user.uid,
        email: req.user.email,
        fullname: req.user.fullname
    }
    let token = jwt.sign(payload, 'thisissparta');
    res.status(200).send({ token });
};

const create = async (req, res) => {
    try {
        await validator(req.body)
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    try {
        req.body.password = bcrypt.hashSync(req.body.password)
        let u = await users.create(req.body)

        res.status(201).send(u)
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const forgotPassword = async (req, res) => {
    res.send('ok')
};

const resetPassword = async (req, res) => {
    res.send('ok')
};


module.exports = {
    login,
    validate,
    renew,
    create,
    forgotPassword,
    resetPassword
}