module.exports = function(app) {

  var users = require('./controllers/users');

  app.post('/eliza', users.register);
  app.post('/eliza/DOCTOR', users.send_text);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};