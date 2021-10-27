const mongoose = require('mongoose');

let username = 'meto2208';
let password = '';
let dbname = 'semos-test';
let host = '';


let dsn = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Couldn`t connect to database: ', err);
        }
        console.log('Successfully connected to db.');
    }
)