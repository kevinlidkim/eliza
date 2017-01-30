var db = require('../../config/db');

exports.findAll = function(req, res) {

  db.Comment.findAll()
    .then(function (comments) {
      res.status(200).json(comments);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.show = function(req, res) {

  db.Comment.findById(req.params.id)
    .then(function (comment) {
      res.status(200).json(comment);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.create = function(req, res) {

  var comment = db.Comment.create(req.body)
    .then(function (newComment) {
      res.status(200).json(newComment);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.update = function(req, res) {

  db.Comment.update(req.body, {
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

  db.Comment.destroy({
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