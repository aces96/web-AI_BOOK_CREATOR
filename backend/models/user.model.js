const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A User must have a name']
    },
    email: {
        type: String,
        required: [true, 'A User must have an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'A user must have a passowrd'],
    },
    pages: {
            type: mongoose.Schema.ObjectId,
            ref: 'pages',
    }
});


const User = mongoose.model('user', userSchema);

module.exports = User;