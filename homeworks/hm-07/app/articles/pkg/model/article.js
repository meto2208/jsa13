const mongoose = require('mongoose');

const Article = mongoose.model(
    'Article',
    {
        title: String,
        content: String,
        tags: [String],
        publish_date: Date,
        author_id: String
    },
    'Articles'
);

module.exports = Article;