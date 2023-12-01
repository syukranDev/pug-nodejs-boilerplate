const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser')

const indexRouter = require('./routes/index');
const bitcoinRouter = require('./routes/bitcoinRouter');

// const PORT = 3113;
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb'}))
app.use(bodyParser.urlencoded({limit: '1mb', extended : true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// To render PUG file all in index routes
app.use('/', indexRouter);

//For API routes
app.use('/api/bitcoin', bitcoinRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
