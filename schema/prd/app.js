"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _connectdb = _interopRequireDefault(require("./db/connectdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
var DATABASR_URL = "mongodb://localhost:27017"; // import './models/Student';
// const express = require('express');
// const { mongo, connect } = require('mongoose');
// const ConnectDB = require('./db/connectdb');
// const  models =require("./models/Student");

app.get('/', function (req, res) {
  res.send("Server is working");
}); // ConnectDB(DATABASR_URL);

app.listen(PORT, function () {
  console.log("Server is working at http://localhost:".concat(PORT));
});