"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _connectdb = _interopRequireDefault(require("./db/connectdb"));

var _student = _interopRequireDefault(require("./models/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
var DATABASE_URL = 'mongodb://localhost:27017';
(0, _student["default"])();
app.get('/', function (req, res) {
  res.send("Server is working");
});
(0, _connectdb["default"])(DATABASE_URL);
app.listen(PORT, function () {
  console.log("server is working at http://localhost:".concat(PORT));
});