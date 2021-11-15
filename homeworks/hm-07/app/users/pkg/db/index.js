const mongoose = require('mongoose');
const config = require('../config');

const dsnConfig = config.get('dsn_config');

let dsn = `mongodb+srv://${dsnConfig.username}:${dsnConfig.password}@${dsnConfig.host}/${dsnConfig.dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to DB', err);
        }
        console.log('Successfuly connectet to DB');
    }
)