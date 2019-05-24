const { getDefaultUsersList } = require("./services/user.service");

const express = require('express');
// var cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', usersRouter);

// load initial list of users when server loads 
getDefaultUsersList();

module.exports = app;
