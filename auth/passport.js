// js
const bcrypt = require("bcryptjs");
localStorage = require("passport-local").Strategy;

// load model
const User = require("../models/User");

const loginCheck = (passport) => {
  passport.use(
    new localStorage({ usernameField: "email" }, (email, password, done) =>
      //   check customer email
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("worng email");
            return done();
          }

          // match password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, user);
            } else {
              console.log("Wrong password");
              return done();
            }
          });
        })
        .catch((error) => console.log(error))
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};

module.exports = { loginCheck };
