const { Validator } = require('node-input-validator');

const createSchema = {
    first_name: 'required',
    last_name: 'required',
    password: 'required',
    email: 'required'
};

const validate = async (data) => {
    let v = new Validator(data, createSchema);
    let e = await v.check();
    if (!e) {
        throw v.errors
    };
};

module.exports = validate;