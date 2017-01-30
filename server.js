// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var flash          = require('connect-flash');
var mysql          = require('mysql');
var passport       = require('passport');
var session        = require('express-session');


// configuration ===========================================
  
// config files
var db = require('./config/db');
require('./config/passport')(passport);

app.use(session({ secret: 'secretsecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var port = process.env.PORT || 8001; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app, passport); // pass our application into our routes

// start app ===============================================
app.listen(port); 
console.log('\nServer hosted on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app