const express = require('express');
const router = express.Router();
const {createBook, findAllBooks, removeBook} = require('../controllers/generateBook')



router.route('/createBook')
        .post(createBook)

router.route('/getAllBooks')
        .get(findAllBooks)

router.route('/removeBook')
        .post(removeBook)

exports.module = router