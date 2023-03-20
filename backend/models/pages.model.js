const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    content: {
        type: {
            title: String,
            body: String
    }
    },
    title: {
        type: String,
        default: 'Untitled'
    },
    user_id: [{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    }],
    book_id: [{
        type: mongoose.Schema.ObjectId,
        ref: 'book',
    }],
    createdAt: {
        type: String
    }
});

const page = mongoose.model('page', pageSchema);
module.exports = page;