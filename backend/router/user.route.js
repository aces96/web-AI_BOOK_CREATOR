const express = require('express');
const router = express.Router();
const {updateCredits, getUser, reduceUserCredits} = require('../controllers/users.controller')


router.route('/updateUserCredits')
        .post(updateCredits)

router.route('/getUser')
        .post(getUser)

router.route('/reduceCredits')
        .post(reduceUserCredits)



module.exports = router