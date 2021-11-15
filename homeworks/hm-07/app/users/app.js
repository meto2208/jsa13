
require('./pkg/db')
const express = require('express');
const handlers = require('./handlers/auth');
const jwt = require('express-jwt');
const config = require('./pkg/config');

const cnfApp = config.get('app');
const cnfSecurity = config.get('security');

const app = express();

app.use(express.json());
app.use(jwt({
    secret: cnfSecurity.secret,
    algorithms: cnfSecurity.algorithms
}).unless({
    path: [
        '/auth/login',
        '/auth/create-user'
    ]
}))


app.post('/auth/login', handlers.login);
app.get('/auth/validate', handlers.validate);
app.get('/auth/renew-jwt', handlers.renew);
app.post('/auth/create-account', handlers.create);
app.post('/auth/forgot-password', handlers.forgotPassword);
app.post('/auth/reset-password', handlers.resetPassword);

app.listen(cnfApp.port, err => {
    if (err) {
        return console.log('Something went wrong');
    };
    console.log(`Server is up and running on port ${cnfApp.port}`);
});