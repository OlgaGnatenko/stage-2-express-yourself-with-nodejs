const { getDefaultUsersList } = require("./services/user.service");

const express = require("express");
// var cookieParser = require('cookie-parser');
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const fightsRouter = require("./routes/fight");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/fight", fightsRouter);

// load initial list of users when server loads
getDefaultUsersList();

module.exports = app;
