const express = require('express');
const router = express.Router();
const {createPage} = require('../controllers/generatePage')



router.route('/createPage')
        .post(createPage)


exports.module = router