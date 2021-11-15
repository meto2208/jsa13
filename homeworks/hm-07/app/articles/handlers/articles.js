const articles = require('../pkg/articles/index');
const validator = require('../pkg/articles/validator');

const getAll = async (req, res) => {

    try {
        const a = await articles.getAll()
        res.send(a)
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    };
};

const create = async (req, res) => {
    try {
        await validator(req.body, 'CREATE_OD_UPDATE')
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    };
    try {
        let data = {
            ...req.body,
            author_id: req.user.uid
        }
        let a = await articles.create(data);
        res.status(201).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }

};

const getMine = async (req, res) => {
    try {
        let a = await articles.getAllByUser(req.user.uid)
        res.status(200).send(a)
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const getOne = async (req, res) => {
    try {
        let a = await articles.getOne(req.params.id);
        res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
};

const update = async (req, res) => {
    try {
        await validator(req.body, 'CREATE_OR_UPDATE');
    } catch (e) {
        console.log(e);
        return res.status(500).send(e)
    };
    try {
        let a = await articles.update(req.params.id, req.user.uid, req.body);
        res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

const partialUpdate = async (req, res) => {
    try {
        await validator(req.body, 'PARTIAL_UPDATE');
    } catch (e) {
        console.log(e);
        return res.status(500).send(e)
    };
    try {
        let a = await articles.update(req.params.id, req.user.uid, req.body)
        res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

const remove = async (req, res) => {
    try {
        let a = await articles.remove(req.params.id, req.user.uid);
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

module.exports = {
    getAll,
    create,
    getMine,
    getOne,
    update,
    partialUpdate,
    remove
}