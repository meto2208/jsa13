
const mongoose = require('mongoose');

const Car = mongoose.model(
    'Cars',
    {
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    'Cars'
);

const getAll = async () => {
    let data = await Car.find({})
    return data
};

const create = async (carData) => {
    let c = await new Car(carData);
    return c.save();
};

const getOne = async (id) => {
    let c = await Car.findOne({ _id: id });
    return c
};

const update = async (id, carData) => {
    return await Car.updateOne({ _id: id }, carData);
};

const partialUpdate = async (id, carData) => {
    return await Car.updateOne({ _id: id }, carData);
};

const remove = async (id) => {
    return await Car.findByIdAndDelete({ _id: id });
};

module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove
}
