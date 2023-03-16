const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'page'}]
});

const book = mongoose.model('book', bookSchema);
module.exports = book;