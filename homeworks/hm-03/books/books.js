const fs = require('./fs');
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();
const db = 'books.json'

const getAll = async () => {
    let data = await fs.read(db)
    return data
};

const create = async (bookData) => {
    let data = await fs.read(db);
    let book = {
        id: id,
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        publication_date: bookData.publication_date,
        pages: bookData.pages,
        publisher: bookData.publisher

    };
    data = [...data, book];
    await fs.write(db, data);
    return book
};
const getOne = async (id) => {
    let data = await fs.read(db);
    let book = data.find(b => b.id === id);
};
const update = async (id, bookData) => {
    let data = await fs.read(db);
    data = data.map(b => {
        if (b.id === id) {
            b.title = bookData.title
            b.author = bookData.author
            b.genre = bookData.genre
            b.publication_date = bookData.publication_date
            b.pages = bookData.pages
            b.publisher = bookData.publisher
        }
        return b
    });
    await fs.write(db, data)
};
const partialUpdate = async (id, bookData) => {
    let data = await fs.read(db);

    data = data.map(b => {
        if (b.id === id) {
            b.title = bookData.title || b.title
            b.author = bookData.author || b.author
            b.genre = bookData.genre || b.genre
            b.publication_date = bookData.publication_date || b.publication_date
            b.pages = bookData.pages || b.pages
            b.publisher = bookData.publisher || b.publisher
        }
        return b
    });
    await fs.write(db, data);
};
const remove = async (id) => {
    let data = await fs.read(db);
    let prevLength = data.length;
    data = data.filter(e => e.id != id);
    if (prevLength === data.length) {
        return false
    }
    await fs.write(db, data)
    return true

}

module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove

}