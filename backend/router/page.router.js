const express = require('express');
const router = express.Router();
const {createPage, getPagesById} = require('../controllers/generatePage')



router.route('/createPage')
        .post(createPage)

router.route('/getPageById')
        .post(getPagesById)


module.exports = router