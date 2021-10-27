// const books = require('./books')
const books = require('../pkg/books/mongo-books')

const getAll = async (req, res) => {
    try {
        let data = await books.getAll();
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const create = async (req, res) => {
    try {

        const condition = !req.body.title || !req.body.author || !req.body.genre || !req.body.publication_date || !req.body.pages || !req.body.publisher;
        if (condition) return res.status(400).send('Bad request.')
        let book = await books.create(req.body);

        res.status(201).send(book)

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};
const getOne = async (req, res) => {

    try {

        let book = await books.getOne(req.params.id);
        if (!book) return res.status(404).send('Book not found.');
        res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};
const update = async (req, res) => {
    try {

        const condition = !req.body.title || !req.body.author || !req.body.genre || !req.body.publication_date || !req.body.pages || !req.body.publisher
        if (condition) return res.status(400).send('Bad request.')
        await books.update(req.params.id, req.body);
        res.status(204).send();

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    };
};
const partialUpdate = async (req, res) => {
    try {
        const condition = req.body.title || req.body.author || req.body.genre || req.body.publication_date || req.body.pages || req.body.publisher
        if (!condition) {
            return res.status(400).send('Bad request.');
        }
        await books.partialUpdate(req.params.id, req.body);
        res.status(204).send();

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    };


};
const remove = async (req, res) => {

    if (await books.remove(req.params.id)) {
        return res.status(204).send();
    } else {
        return res.status(404).send('Book not found or already removed.');
    };
    res.send();

};

module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove
};