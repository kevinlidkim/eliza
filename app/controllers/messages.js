var db = require('../../config/db');

exports.findAll = function(req, res) {

  db.Message.findAll()
    .then(function (messages) {
      res.status(200).json(messages);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.show = function(req, res) {

  db.Message.findById(req.params.id)
    .then(function (message) {
      res.status(200).json(message);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.create = function(req, res) {

  var message = db.Message.create(req.body)
    .then(function (newMessage) {
      res.status(200).json(newMessage);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.update = function(req, res) {

  db.Message.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.delete = function(req, res) {

  db.Message.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}