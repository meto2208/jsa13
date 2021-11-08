const mongoose = require('mongoose');

const username = 'meto2208';
const password = 'JzQBHLNE32QzKjF2';
const dbname = 'articles-db-test';
const host = 'jsa13-cluster.vipm9.mongodb.net';


const dsn = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to db', err);
        }
        console.log(`Successfully connected to ${dbname}`);
    }
)