const express = require('express');
const router = express.Router();
const {createPage, getPagesById, deletePageById} = require('../controllers/generatePage')



router.route('/createPage')
        .post(createPage)

router.route('/getPageById')
        .post(getPagesById)

router.route('/removePage')
        .post(deletePageById)


module.exports = router