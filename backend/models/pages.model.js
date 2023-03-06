const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date_from: {
        type: Date,
        required: true
    },
    date_to: {
        type: Date,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    }
});

const booking = mongoose.model('book', bookingSchema);
module.exports = booking;