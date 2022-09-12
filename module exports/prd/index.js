"use strict";

var _express = _interopRequireDefault(require("express"));

var _word = _interopRequireDefault(require("./word"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
console.log(_word["default"]);
app.get('/', function (req, res) {
  res.send("Hello beautiful world");
});
app.listen(PORT, function () {
  console.log("server is wokring at http://localhost:".concat(PORT));
});