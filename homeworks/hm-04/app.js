require('./pkg/db/index')
const express = require('express');
const cars = require('./handlers/cars');
const books = require('./handlers/books');

const app = express();

app.use(express.json());

app
    .get('/cars', cars.getAll)
    .post('/cars', cars.create)
    .get('/cars/:id', cars.getOne)
    .put('/cars/:id', cars.update)
    .patch('/cars/:id', cars.partialUpdate)
    .delete('/cars/:id', cars.remove)

app
    .get('/books', books.getAll)
    .post('/books', books.create)
    .get('/books/:id', books.getOne)
    .put('/books/:id', books.update)
    .patch('/books/:id', books.partialUpdate)
    .delete('/books/:id', books.remove)

app.listen(3000, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server is up and running on port 3000');
})