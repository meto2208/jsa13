require('./pkg/db/index');
const express = require('express');
const handlers = require('./handlers/auth');

const api = express();

api.use(express.json());

api.post('/auth/login', handlers.login);
api.get('/auth/validate', handlers.validate);
api.post('/auth/create-account', handlers.createAccount);
api.post('/auth/forgot-password', handlers.forgotPassword);
api.post('/auth/reset-password', handlers.resetPassword);

api.listen(10000, err => {
    if (err) {
        return console.log('Could not start server');
    }
    console.log('Server is up and running on port 10000');
});