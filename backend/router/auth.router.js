const express = require('express');
const router = express.Router();
const passport = require('passport')


router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login' }),
  function(req, res) {
    console.log(req.user.id);
    // Successful authentication, redirect home.
    res.redirect(`http://localhost:5173/book?email=${req.user.email}&fullname=${req.user.name}&secret=${req.user.secret}&id=${req.user.id}`);
});


module.exports = router