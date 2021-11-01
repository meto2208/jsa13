const { Validator } = require('node-input-validator');

const userSchemaInsert = {
    first_name: 'required|minLength:3',
    last_name: 'required|minLength:4',
    email: 'required|email',
    password: 'required|minLength:4'
};


const userSchemaLogin = {
    email: 'required|email',
    password: 'required|minLength:4'
};

const validator = async (data, schema = 'INSERT') => {
    let s;
    switch (schema) {
        case 'INSERT':
            s = userSchemaInsert
            break;
        case 'LOGIN':
            s = userSchemaLogin
            break;
    };
    let v = new Validator(data, s);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    };
};

module.exports = validator