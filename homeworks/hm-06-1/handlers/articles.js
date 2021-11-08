const validator = require('../pkg/articles/validate');
const article = require('../pkg/articles/index');

const create = async (req, res) => {
    try {
        await validator(req.body, 'CREATE_OR_UPDATE');
    } catch (e) {
        console.log(e);
        return res.status(400).send('Bad request.');
    };

    try {
        let data = {
            ...req.body,
            author_id: req.user.uid
        };
        let output = await article.create(data);
        res.status(201).send(output);

    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    };
};

const getAll = async (req, res) => {
    try {
        let a = await article.getAll();
        return res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

const getMine = async (req, res) => {
    try {
        let a = await article.getAllByUser(req.user.uid);
        return res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    };
};

const getOne = async (req, res) => {
    try {
        let a = await article.getOne(req.params.id)
        return res.status(200).send(a);
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    };
};

const update = async (req, res) => {
    try {
        await validator(req.body, 'CREATE_OR_UPDATE')
    } catch (e) {
        console.log(e);
        return res.status(400).send('Bad request')
    };
    try {
        await article.update(req.params.id, req.user.uid, req.body);
        res.status(204).send()
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const partialUpdate = async (req, res) => {
    try {
        await validator(req.body, 'PARTIAL_UPDATE');
    } catch (e) {
        console.log(e);
        return res.status(400).send('Bad request');
    };
    try {
        await article.partialUpdate(req.params.id, req.user.uid, req.body);
        res.status(204).send('')
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const remove = async (req, res) => {
    try {
        await article.remove(req.params.id, req.user.uid);
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
};

module.exports = {
    create,
    getAll,
    getMine,
    getOne,
    update,
    partialUpdate,
    remove
};