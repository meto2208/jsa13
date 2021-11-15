require('./pkg/db');

const express = require('express');
const handlers = require('./handlers/articles');
const jwt = require('express-jwt');
const config = require('./pkg/config');

const cnfApp = config.get('app');
const cnfSecurity = config.get('security');

const app = express();

app.use(express.json());
app.use(jwt({
    secret: cnfSecurity.secret,
    algorithms: cnfSecurity.algorithms
}));

app
    .get('/articles', handlers.getAll)
    .post('/articles', handlers.create)
    .get('/articles/me', handlers.getMine)
    .get('/articles/:id', handlers.getOne)
    .put('/articles/:id', handlers.update)
    .patch('/articles/:id', handlers.partialUpdate)
    .delete('/articles/:id', handlers.remove)

app.listen(cnfApp.port, err => {
    if (err) {
        return console.log('Problem with server');
    }
    console.log(`Server successfully starter on port ${cnfApp.port}`);
});
