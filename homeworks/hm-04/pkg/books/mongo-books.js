const mongoose = require('mongoose');

const Book = mongoose.model(
    'Books',
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true
        },
        publication_date: {
            type: Date,
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        }

    }
);

const getAll = async () => {
    let data = await Book.find({});
    return data
};

const create = async (bookData) => {
    let data = await new Book(bookData);
    return data.save();
};

const getOne = async (id) => {
    let b = await Book.findOne({ _id: id });
    return b
};

const update = async (id, bookData) => {
    return await Book.updateOne({ _id: id }, bookData);
};

const partialUpdate = async (id, bookData) => {
    return await Book.updateOne({ _id: id }, bookData);
};

const remove = async (id) => {
    return await Book.findByIdAndDelete({ _id: id });
};

module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove
}
