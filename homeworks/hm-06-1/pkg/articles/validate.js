const { Validator } = require('node-input-validator');


const articleCreateAndUpdate = {
    title: 'required|string|minLength:4',
    content: 'required|string|minLength:50',
    publish_date: 'required|dateFormat:YYYY-MM-DD',
    tags: 'required|array'
};

const articlePartialUpdate = {
    title: 'string|minLength:4',
    content: 'string|minLength:50',
    publish_date: 'dateFormat:YYYY-MM-DD',
    tags: 'array'
}

const validate = async (data, schema) => {
    let s;
    switch (schema) {
        case 'CREATE_OR_UPDATE':
            s = articleCreateAndUpdate
            break;
        case 'PARTIAL_UPDATE':
            s = articlePartialUpdate
            break;
    }
    let v = new Validator(data, s);
    let e = await v.check();
    if (!e) {
        throw v.errors
    };
};

module.exports = validate