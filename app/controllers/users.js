var db = require('../../config/db');

exports.findAll = function(req, res) {

  db.User.findAll()
    .then(function (users) {
      res.status(200).json(users);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

// findById doesn't even exist in sequelize lol (its a mongoose function)

// exports.show = function(req, res) {

//   db.User.findById(req.params.id)
//     .then(function (user) {
//       res.status(200).json(user);
//     })
//     .catch(function (err) {
//       res.status(500).json(err);
//     });
// }

exports.login = function(req, res) {
  req.logIn(req.user, function(err) {
    if (err) {
      return res.status(500).json({
        status: 'Could not log in user'
      });
    } else {
      return res.status(200).json({
        status: 'Login successful'
      });
    }
  })
}

exports.logout = function(req, res) {
  req.logout();
  return res.status(200).json({
    status: 'Bye!'
  });
}


exports.create = function(req, res) {
   return res.status(200).json({
    status: 'Registration successful!'
   });
}

exports.auth = function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  } else {
    return res.status(200).json({
      status: true
    })
  }
}

// exports.update = function(req, res) {

//   db.User.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function (updatedRecords) {
//       res.status(200).json(updatedRecords);
//     })
//     .catch(function (err) {
//       res.status(500).json(err);
//     });
// }

// exports.delete = function(req, res) {

//   db.User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function (deletedRecords) {
//       res.status(200).json(deletedRecords);
//     })
//     .catch(function (err) {
//       res.status(500).json(err);
//     });
// }