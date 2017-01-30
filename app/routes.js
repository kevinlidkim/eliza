module.exports = function(app) {

  var users = require('./controllers/users');

  app.post('/register', users.register);
  app.post('/send_text', users.send_text);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};