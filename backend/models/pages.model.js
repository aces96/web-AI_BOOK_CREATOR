const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    content: {
        type: {
            title: String,
            body: String
        }
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    book_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'book',
    }
});

const page = mongoose.model('page', pageSchema);
module.exports = page;