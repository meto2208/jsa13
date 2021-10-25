const fs = require('./fs');
const { v4: uuidv4 } = require('uuid');
var id = uuidv4();
const db = 'cars.json';

const getAll = async () => {
    let data = await fs.read(db);
    return data;
};
const create = async (carDetails) => {
    let data = await fs.read(db);
    let car = {
        id: id,
        make: carDetails.make,
        model: carDetails.model,
        type: carDetails.type,
        year: carDetails.year
    };
    data = [...data, car];
    await fs.write(db, data);
};
const getOne = async (id) => {
    let data = await fs.read(db);
    let car = data.find(c => c.id === id);
    return car
};
const update = async (id, carDetails) => {
    let data = await fs.read(db);
    data = data.map(c => {
        if (c.id === id) {
            c.make = carDetails.make,
                c.model = carDetails.model,
                c.type = carDetails.type,
                c.year = carDetails.year
        }
        return c
    });
    await fs.write(db, data);
};
const partialUpdate = async (id, carDetails) => {
    let data = await fs.read(db);
    data = data.map(c => {
        if (c.id === id) {
            c.make = carDetails.make || c.make
            c.model = carDetails.model || c.model
            c.type = carDetails.type || c.type
            c.year = carDetails.year || c.year
        }
        return c
    });
    await fs.write(db, data);
};
const remove = async (id) => {
    let data = await fs.read(db);
    let prevLength = data.length;
    data = data.filter(c => c.id != id);
    if (data.length === prevLength) {
        return false
    };
    await fs.write(db, data);
    return true
};

module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove
};