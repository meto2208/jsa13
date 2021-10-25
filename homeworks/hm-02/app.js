const express = require('express');
const handlers = require('./handlers')

const app = express();

app.use(express.json());

app
    .get('/students', handlers.getAll)
    .post('/students', handlers.create)
    .get('/students/:id', handlers.getOne)
    .put('/students/:id', handlers.update)
    .patch('/students/:id', handlers.partialUpdate)
    .delete('/students/:id', handlers.remove)
    .listen(3000, (err) => {
        if (err) {
            return err
        }
        return console.log('Server is up and running on port 3000');
    })