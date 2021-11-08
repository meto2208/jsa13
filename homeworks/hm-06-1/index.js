require('./pkg/db/index');

const express = require('express');
const handlers = require('./handlers/articles');
const jwt = require('express-jwt');



const app = express();
app.use(express.json());
app.use(jwt({
    secret: 'secretpassword',
    algorithms: ['HS256']
}))

app
    .post('/articles', handlers.create)
    .get('/articles', handlers.getAll)
    .get('/articles/me', handlers.getMine)
    .get('/articles/:id', handlers.getOne)
    .put('/articles/:id', handlers.update)
    .patch('/articles/:id', handlers.partialUpdate)
    .delete('/articles/:id', handlers.remove)

app.listen(3001, err => {
    if (err) {
        return console.log('Could not start server', err);
    }
    console.log('Server successfully started on port 3001');
})