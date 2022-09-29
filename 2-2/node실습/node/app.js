const express = require("express");

const indexRouter = require("./routes/index");
const helloRouter = require("./routes/hello");

const app = express();
app.use("/", indexRouter);
app.use("/hello", helloRouter);
module.exports = app;
