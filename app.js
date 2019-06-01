var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbHelper = require('./DB.model/sqlDB');

var indexRouter = require('./routes/index');
var dbRouter = require('./routes/db');

var app = express();
dbHelper.connect()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/db', dbRouter);


module.exports = app;
