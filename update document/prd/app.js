"use strict";

var _express = _interopRequireDefault(require("express"));

var _connectdb = _interopRequireDefault(require("./db/connectdb"));

var _student = require("./models/student");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 8000;
var DATABASE_URL = "mongodb://localhost:27017";
app.get('/', function (req, res) {
  res.send("Hello world");
});
(0, _connectdb["default"])(DATABASE_URL);
(0, _student.multDoc)('23');
app.listen(PORT, function () {
  console.log("server is working at http://localhost:".concat(PORT));
});