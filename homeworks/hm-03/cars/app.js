const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());

app
    .get('/cars', handlers.getAll)
    .post('/cars', handlers.create)
    .get('/cars/:id', handlers.getOne)
    .put('/cars/:id', handlers.update)
    .patch('/cars/:id', handlers.partialUpdate)
    .delete('/cars/:id', handlers.remove)

app.listen(3000, (err) => {
    if (err) return err
    console.log('Server is up and running on port 3000.');
});