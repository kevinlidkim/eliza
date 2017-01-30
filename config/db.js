var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var db = {};

var secret = require('./secret.json');
var rootPath = path.normalize(__dirname + '/..');
var modelsDir = rootPath + '/app/models';

// Create a Sequelize connection with our database
var sequelize = new Sequelize(secret.database, secret.user, secret.password, {
  host: secret.host,
  port: secret.port,
  dialect: 'mysql',
  logging: false
})


// Load all the models
fs
  .readdirSync(modelsDir)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    console.log('Loading model file ' + file);
    var model = sequelize.import(path.join(modelsDir, file));
    db[model.name] = model;
  })


// Invoke association for each model
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].options.hasOwnProperty('associate')) {
        db[modelName].options.associate(db)
    }
})


// Test to see if connection to db has been established
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Sequelize connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// Export the db Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;