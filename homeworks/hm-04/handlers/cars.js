// const cars = require('./cars');
const cars = require('../pkg/cars/mongo-cars')

const getAll = async (req, res) => {
    try {
        let data = await cars.getAll();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    };

};

const create = async (req, res) => {

    try {
        // let condition = !req.body.make || !req.body.model || !req.body.type || !req.body.year
        // if (condition) return res.status(400).send('Bad request.')
        let car = await cars.create(req.body);
        res.status(201).send(car);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const getOne = async (req, res) => {
    try {
        let car = await cars.getOne(req.params.id)
        if (!car) return res.status(404).send('Car not found.');
        res.status(200).send(car);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const update = async (req, res) => {
    try {
        // let condition = !req.body.make || !req.body.model || !req.body.type || !req.body.year
        // if (condition) return res.status(400).send('Bad request.')
        await cars.update(req.params.id, req.body)
        res.status(204).send()

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const partialUpdate = async (req, res) => {
    try {
        // let condition = req.body.make || req.body.model || req.body.type || req.body.year
        // if (!condition) return res.status(400).send('Bad request.')
        await cars.partialUpdate(req.params.id, req.body);
        res.status(204).send()

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const remove = async (req, res) => {
    try {

        if (await cars.remove(req.params.id)) {
            return res.status(204).send();
        }
        return res.status(404).send('Car not found or already deleted.')

    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
}