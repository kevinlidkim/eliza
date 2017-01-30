var db = require('./db');

var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    return done(null, user.userId);
  });

  passport.deserializeUser(function(id, done) {
    db.User.find({where: {userId: id}}).then(function(user) {
      if (!user) {
        console.log('Logged in user not in database');
        return done(null, false);
      }
      return done(null, user);
    }).catch(function(err) {
      return done(err, null);
    })
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    db.User.find({ where: { email: email }}).then(function(user) {

      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      } 
      else if (user.hashedPassword != password) {
        return done(null, false, { message: 'Invalid password' });
      } 
      else {
        return done(null, user);
      }
    }).catch(function(err) {
      return done(err);
    });

  }));

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    db.User.find({ where: { email: email }}).then(function(user) {
      if (user) {
        return done(null, false, { message: 'Email already in use' });
      } 
      else {
        var person = db.Person.create(req.body)
          .then(function(newPerson) {
            var date = new Date();
            var userData = {
              email: req.body.email,
              hashedPassword: req.body.password,
              accountCreateDate: date,
              personId: newPerson.personId,
            };

            var newUser = db.User.create(userData);
            return newUser;
          })
          .then(function(returnUser) {
            return done(null, returnUser);
          })

        // return done(null, newUser);
      }
    }).catch(function(err) {
      return done(err);
    });

  }));

};