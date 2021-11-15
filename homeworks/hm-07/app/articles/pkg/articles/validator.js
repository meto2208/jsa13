const { Validator } = require('node-input-validator');

const createArticlesSchema = {
    title: 'required|string|minLength:4',
    content: 'required|string|minLength:30',
    tags: 'required|array',
    publish_date: 'required|dateFormat:YYYY-MM-DD'
};

const partialUpdateArticlesSchema = {
    title: 'string|minLength:4',
    content: 'string|minLength:30',
    tags: 'array',
    publish_date: 'dateFormat:YYYY-MM-DD'
}

const validator = async (data, schema) => {
    let s;
    switch (schema) {
        case 'CREATE_OR_UPDATE':
            s = createArticlesSchema
            break;
        case 'PARTIAL_UPDATE':
            s = partialUpdateArticlesSchema
            break;
    }

    let v = new Validator(data, s);
    let e = await v.check();
    if (!e) {
        throw v.errors
    };
};

module.exports = validator