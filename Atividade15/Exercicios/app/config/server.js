var express = require("express");

var app = express(); // executando o express

app.set("view engine", "ejs");

module.exports = app;