var db = require('../../config/db');

exports.findAll = function(req, res) {

  db.Advertisement.findAll()
    .then(function (advertisements) {
      res.status(200).json(advertisements);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.show = function(req, res) {

  db.Advertisement.findById(req.params.id)
    .then(function (advertisement) {
      res.status(200).json(advertisement);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.create = function(req, res) {

  var advertisement = db.Advertisement.create(req.body)
    .then(function (newAdvertisement) {
      res.status(200).json(newAdvertisement);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

exports.update = function(req, res) {

  db.Advertisement.update(req.body, {
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

  db.Advertisement.destroy({
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