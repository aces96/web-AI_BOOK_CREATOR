const express = require('express');
const router = express.Router();
const {createBook, findAllBooks, removeBook} = require('../controllers/generateBook')



router.route('/createBook')
        .post(createBook)

router.route('/getAllBooks')
        .post(findAllBooks)

router.route('/removeBook')
        .post(removeBook)

module.exports = router