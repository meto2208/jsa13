const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());

app.get('/books', handlers.getAll);
app.post('/books', handlers.create);
app.get('/books/:id', handlers.getOne);
app.put('/books/:id', handlers.update);
app.patch('/books/:id', handlers.partialUpdate);
app.delete('/books/:id', handlers.remove);

app.listen(3001, err => {
    if (err) {
        return err
    }
    return console.log('Server is up and running on port 3001.');
});
