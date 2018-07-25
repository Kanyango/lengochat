var config  = require('./config');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var passport = require('passport');

// view engine setup
app.config = config;
mongoose.connect('mongodb://karis:karisBMW760@ds247121.mlab.com:47121/lengodb');
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(session({
//  secret: 'mysupersecret', 
//  resave: false, 
//  saveUninitialized: false,
//  store: new MongoStore({ mongooseConnection: mongoose.connection }),
//  cookie: { maxAge: 180 * 60 * 1000 }
//}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter)(app, passport);
require('./routes/index.js')(app, passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
