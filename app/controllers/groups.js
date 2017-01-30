var db = require('../../config/db');

exports.findAll = function(req, res) {

  db.Group.findAll()
    .then(function (groups) {
      res.status(200).json(groups);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.show = function(req, res) {

  db.Group.findById(req.params.id)
    .then(function (group) {
      res.status(200).json(group);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.create = function(req, res) {

  var group = db.Group.create(req.body)
    .then(function (newGroup) {
      res.status(200).json(newGroup);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.update = function(req, res) {

  db.Group.update(req.body, {
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

  db.Group.destroy({
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