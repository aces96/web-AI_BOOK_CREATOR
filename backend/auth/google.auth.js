const User = require('../models/user.model');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport)=>{

    passport.serializeUser(function (user, done) {
        done(null, user.id);
      });
      passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
      },
      async function(accessToken, refreshToken, profile, cb) {
        const user = await User.findOne({ google_id: profile.id });
        if(user){   
            const newUserData = {
                name: profile.displayName,
                email: profile.emails[0].value,
                google_id: profile.id,
                secret: accessToken,
            };

            const updateUser = await User.findOneAndUpdate({_id: user.id}, newUserData, {new: true}).then((result)=>{
                return cb(null,result);
            })
        }else{
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                google_id: profile.id,
                secret: accessToken,
            })

            await newUser.save().then((result)=>{
                return cb(null,result);
            })
        }
      }
    ));
}